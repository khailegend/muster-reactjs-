import React, { Component } from "react"
import { Table, Button, Popconfirm, Row, Col, Icon, Upload } from "antd"
import { ExcelRenderer } from 'react-excel-renderer';
import { EditableFormRow, EditableCell } from "./EditTableAddClass"

import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/index'; 

class TableAddClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: [],
            rows: [],
            errorMessage: null,
            columns: [
                {
                    title: "CLASS NAME",
                    dataIndex: "className",
                    editable: true,
                },
                {
                    title: "NUMBER OF STUDENT",
                    dataIndex: "NoN",
                    editable: true
                },
                {
                    title: "DEPARTMENT",
                    dataIndex: "department",
                    editable: true
                },
                {
                    title: "SPECIALIZED",
                    dataIndex: "specialized",
                    editable: true
                },
                {
                    title: "Action",
                    dataIndex: "action",
                    render: (text, record) =>
                        this.state.rows.length >= 1 ? (
                            <Popconfirm
                                title = "Sure to delete?"
                                okText = "Yes"
                                cancelText = "No"
                            >
                                <Icon
                                    onClick = { () => this.handleDelete(record.key) }
                                    type = "delete"
                                    theme = "filled"
                                    style = {{ color: "blue", fontSize: "20px" }}
                                />
                            </Popconfirm>
                        ) : null
                }
            ]
        };
    }

    handleSave = row => {
        const newData = [...this.state.rows]
        const index = newData.findIndex(item => row.key === item.key)
        const item = newData[index]
        newData.splice(index, 1, {
            ...item,
            ...row,
        })
        this.setState({ rows: newData })
    }

    checkFile(file) {
        let errorMessage = "";
        if (!file || !file[0]) {
            return;
        }
        const isExcel =
            file[0].type === "application/vnd.ms-excel" ||
            file[0].type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        if (!isExcel) {
            errorMessage = "You can only upload Excel file!";
        }
        console.log("file", file[0].type);
        const isLt2M = file[0].size / 1024 / 1024 < 2;
        if (!isLt2M) {
            errorMessage = "File must be smaller than 2MB!";
        }
        console.log("errorMessage", errorMessage);
        return errorMessage;
    }

    fileHandler = fileList => {
        console.log("fileList", fileList)
        let fileObj = fileList
        if (!fileObj) {
            this.setState({
                errorMessage: "No file uploaded!",
            })
            return false
        }
        console.log("fileObj.type:", fileObj.type)
        if (
            !(
                fileObj.type === "application/vnd.ms-excel" ||
                fileObj.type ===
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            )
        ) {
            this.setState({
                errorMessage: "Unknown file format. Only Excel files are uploaded!",
            })
            return false
        }
        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err)
            } else {
                let newRows = []
                resp.rows.slice(1).map((row, index) => {
                    if (row && row !== "undefined") {
                        newRows.push({
                            key: index,
                            className: row[0],
                            NoN: row[1],
                            department: row[2],
                            specialized: row[3]
                        })
                    }
                })
                if (newRows.length === 0) {
                    this.setState({
                        errorMessage: "No data found in file!",
                    })
                    return false
                } else {
                    this.setState({
                        cols: resp.cols,
                        rows: newRows,
                        errorMessage: null,
                    })
                }
            }
        })
        return false
    }

    handleSubmit = async () => {
        //submit to API 
        //if successful, banigate and clear the data
        //this.setState({ rows: [] })
        let classList = this.state.rows
        for (let i in classList){
            this.props.onAddClasses(classList[i])
        }
        // put data of classes list to server 
        this.props.onCloseModalAddClasses()
        this.props.onOpenSnackbar()
    }

    handleDelete = key => {
        const rows = [...this.state.rows]
        this.setState({ rows: rows.filter(item => item.key !== key) })
    }
    handleAdd = () => {
        const { rows } = this.state
        let count = rows.length
        const newData = {
            key: count,
            className: "Class name",
            NoN: "20",
            department: "Information Technology",
            specialized: "Website Programming"
        }
        this.setState({
            rows: [newData, ...rows],
        })
    }
    render() {
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        }
        const columns = this.state.columns.map(col => {
            if (!col.editable) {
                return col
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            }
        })
        return (
            <>
                <Row justify="space-between">
                    <Col
                        span = {20}
                        align = "right"
                        style = {{ display: "flex", justifyContent: "space-between" }}
                    >
                        <Button
                            onClick = {this.handleAdd}
                            size = "large"
                            type = "info"
                            style = {{ marginBottom: 16 }}
                        >
                            <Icon type = "plus" />
                            Add a row
                        </Button>{" "}
                    </Col>
                    <Col
                        span = {4}
                        align = "right"
                        style = {{ display: "flex", justifyContent: "space-between" }}
                    >
                        {this.state.rows.length > 0 && (
                            <>
                                <Button
                                    onClick = {this.handleSubmit}
                                    size = "large"
                                    type = "primary"
                                    
                                    style = {{ marginBottom: 16 }}
                                >
                                    Submit Data
                                </Button>
                            </>
                        )}
                    </Col>
                </Row>
                <div>
                    <Upload
                        name = "file"
                        beforeUpload = {this.fileHandler }
                        onRemove = {() => this.setState({ rows: [] })}
                        multiple = {false}
                    >
                        <Button>
                            <Icon type = "upload" /> Click to Upload Excel File
                        </Button>
                    </Upload>
                </div>
                <div style = {{ marginTop: 20 }}>
                    <Table
                        components = {components}
                        rowClassName = {() => 'editable-row'}
                        dataSource = {this.state.rows}
                        columns = {columns}
                    />
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch , props) => {
    return {
        onAddClasses : (classes) => {
            dispatch(actions.addClasses(classes));
        },
        onCloseModalAddClasses : () => {
            dispatch(actions.closeModalAddClasses());
        },
        onOpenSnackbar: () => {
            dispatch(actions.openSnackbar());
        }
    }
}
export default connect(null , mapDispatchToProps)(TableAddClass);