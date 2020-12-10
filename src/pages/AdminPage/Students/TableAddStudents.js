import React, { Component } from "react"
import { Table, Button, Popconfirm, Row, Col, Icon, Upload, message } from "antd"
import { ExcelRenderer } from 'react-excel-renderer';
import { EditableFormRow, EditableCell } from "./EditTableAddStudents";

import axios from 'axios'

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import StudentsList from "./StudentsList";

class TableAddStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: [],
            rows: [],
            errorMessage: null,
            columns: [
                {
                    title: "ID",
                    dataIndex: "id",
                    editable: true,
                },
                {
                    title: "FIRST NAME",
                    dataIndex: "first_name",
                    editable: true
                },
                {
                    title: "LAST NAME",
                    dataIndex: "last_name",
                    editable: true
                },
                {
                    title: "NAME",
                    dataIndex: "name",
                    editable: true
                },
                {
                    title: "EMAIL",
                    dataIndex: "email",
                    editable: true
                },
                {
                    title: "BIRTHDAY",
                    dataIndex: "birthday",
                    editable: true
                },
                {
                    title: "ADDRESS",
                    dataIndex: "address",
                    editable: true
                },
                {
                    title: "PHONE",
                    dataIndex: "phone",
                    editable: true
                },
                {
                    title: "MAJOR",
                    dataIndex: "major",
                    editable: true
                },
                {
                    title: "Action",
                    dataIndex: "action",
                    render: (text, record) =>
                        this.state.rows.length >= 1 ? (
                            <Popconfirm
                                title="Sure to delete?"
                                okText="Yes"
                                cancelText="No"
                            >
                                <Icon
                                    onClick={() => this.handleDelete(record.key)}
                                    type="delete"
                                    theme="filled"
                                    style={{ color: "blue", fontSize: "20px" }}
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
                            id: row[0],
                            first_name: row[1],
                            last_name: row[2],
                            name: row[3],
                            email: row[4],
                            birthday: row[5],
                            address: row[6],
                            phone: row[7],
                            major: row[8],
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

        let studentsList = this.state.rows
        for (let i in studentsList) {
            this.props.onAddStudents(studentsList[i])
        }
        // put data of classes list to server 
        this.props.onCloseModalAddStudents()

        const url = 'https://main.musterapis.xyz';
        let token = localStorage.getItem('token');
        const options = {
            method: 'POST',
            url: `${url}/import-students`,
            headers: {
                'Content-Type' : 'application/json',
                authorization: `Bearer ${token}`
            },
            data : {
                students : studentsList
            },
        }

        axios(options)
            .then(resp => {
                this.props.onOpenSnackbar()
                window.location.reload()
            })
            .catch(error => {
                console.log(error);             
            })
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
            id: 'click to add',
            first_name: 'click to add',
            last_name: 'click to add',
            name: 'click to add',
            email: 'click to add',
            birthday: 'click to add',
            address: 'click to add',
            phone: 'click to add',
            major: 'click to add',
        }
        this.setState({
            rows: [newData, ...rows],
        })
    }
    render() {
        console.log(this.state.rows)
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
                <Row >
                    <Col
                        lg={ 20 } md={ 18 } sm={ 16 } xs={ 14 }
                        align="right"
                        style={{ display: "flex", justifyContent: "space-between" }}
                    >
                        <Button
                            onClick={this.handleAdd}
                            size="large"
                            type="info"
                            className='ml-2'
                            style={{ marginBottom: 16 }}
                        >
                            <Icon type="plus" />
                            <b>Add a Student</b>
                        </Button>
                    </Col>
                    <Col
                        lg={ 4 } md={ 6 } sm={ 8 } xs={ 10 }
                        align="right"
                        style={{ display: "flex", justifyContent: "space-between" }}
                    >
                        {this.state.rows.length > 0 && (
                            <>
                                <Button
                                    onClick={this.handleSubmit}
                                    size="large"
                                    type="primary"
                                    style={{ marginBottom: 16  }}
                                >
                                    <b>Submit Data</b>
                                </Button>
                            </>
                        )}
                    </Col>
                </Row>
                <div>
                    <Upload
                        name="file"
                        beforeUpload={this.fileHandler}
                        onRemove={() => this.setState({ rows: [] })}
                        multiple={false}
                    >
                        <Button className='ml-2'>
                            <Icon type="upload" /> Click to Upload Excel File
                        </Button>
                    </Upload>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Table
                        components={components}
                        rowClassName={() => 'editable-row'}
                        dataSource={this.state.rows}
                        columns={columns}
                        scroll={{ x: 1300 }}
                    />
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddStudents: (students) => {
            dispatch(actions.addStudents(students));
        },
        onCloseModalAddStudents: () => {
            dispatch(actions.closeModalAddStudents());
        },
        onOpenSnackbar: () => {
            dispatch(actions.openSnackbar())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dataStudents : state.addStudents
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableAddStudents);