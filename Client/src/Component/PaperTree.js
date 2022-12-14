import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Layout,
  Row,
  Upload,
} from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";

import FormComp from "./FormComp";
import { UploadOutlined } from "@ant-design/icons";

function PaperTree() {
  const [allData, setallData] = useState({});
  const [userData, setuserData] = useState({
    Buyer: "",
    Branch: "",
    Erp_Code: "",
    Pay_to_bank: "",
    Account_owner: "",
    Invoice_number: "",
    date: "",
    taxable_amount: "",
    due_date: "",
    GST_value: "",
    TDS_TCS: "",
    Credit_Period: "",
    Invoice_Total: "",
    Receivable_amount: "",
    other: "",
    Amount_Received: "",

    // buyerName:"NSM.PVT.LTD",
    // branchName:"123",
    // erpCode:"PT-001",
    // sellerBankId:"KOTAK MAHINDRA",
    // accountOwner:"RAUNAK",
    // invoiceBillNumber:"200",
    // invoiceBillDate:"2022 08 02",
    // taxableAmount:"100",
    // dueDate:"2022 09 02",
    // gstValue:"123",
    // tdsTcs:"123",
    // creditPeriod:"30",
    // invoiceTotal:"200",
    // receivableAmount:"200",
    // other:"123",
    // amountRecievedPaid:"121"
  });
  //   console.log(allData.Account_owner? allData.Account_owner:"");

  const getData = () => {
    const invoiceDetails = JSON.parse(localStorage.getItem("invoiceDetails"));
    setallData(invoiceDetails);
    //    console.log(invoiceDetails);
    console.log(allData.Buyer);

    // setallData(...userData)
    // console.log(allData);
  };
  //   const f1=async()=>{
  //     const res= await fetch("https://invoiceapi.nachpay.com/invoice/read?id=58").then((r)=>{
  //        let data= JSON.parse(r)
  //        console.log(data);

  //     })
  //   }

  const fetchData = async () => {
    try {
      const res = await axios.get(
        // "https://jsonplaceholder.typicode.com/todos/1",
        // `https://invoiceapi.nachpay.com/invoice/read/${JSON.stringify(data)}`
        "https://invoiceapi.nachpay.com/invoice/read/?id=2"
      );
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };
  fetchData();
  const postFun = async () => {
    try {
      const res = await axios.post(
        "https://invoiceapi.nachpay.com/invoice/read",
        userData
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const reset = () => {
    setuserData({
      Buyer: "",
      Branch: "",
      Erp_Code: "",
      Pay_to_bank: "",
      Account_owner: "",
      Invoice_number: "",
      date: "",
      taxable_amount: "",
      due_date: "",
      GST_value: "",
      TDS_TCS: "",
      Credit_Period: "",
      Invoice_Total: "",
      Receivable_amount: "",
      other: "",
      Amount_Received: "",
    });
  };
  const saveFun = (e) => {
    e.preventDefault();

    if (userData.Buyer) {
      localStorage.setItem("invoiceDetails", JSON.stringify(userData));
    }
    // console.log(userData);
    // postFun();
  };

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Layout>
        <Header style={{ backgroundColor: "#fff", textAlign: "center" }}>
          <h1 className="">Create Invoice</h1>
        </Header>
        <Layout>
          <Content className="inpc">
            <Row>
              <Col span={12}>
                <Form>
                  <Row>
                    <Col span={24}>
                      <label>Buyer</label>
                      <Input
                        name="Buyer"
                        //   value={userData.Buyer}
                        value={allData.Buyer ? allData.Buyer : userData.Buyer}
                        onChange={handleChange}
                        placeholder={allData.Buyer ? allData.Buyer : ""}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={10}>
                      <label>Branch</label>
                      <Input
                        name="Branch"
                        placeholder={allData.Branch ? allData.Branch : ""}
                        //   value={userData.Branch}
                        value={
                          allData.Branch ? allData.Branch : userData.Branch
                        }
                        onChange={handleChange}
                      />
                      <label>Pay To Bank</label>
                      <Input
                        name="Pay_to_bank"
                        placeholder={
                          allData.Pay_to_bank ? allData.Pay_to_bank : ""
                        }
                        //   value={userData.Pay_to_bank}
                        value={
                          allData.Pay_to_bank
                            ? allData.Pay_to_bank
                            : userData.Pay_to_bank
                        }
                        onChange={handleChange}
                      />
                    </Col>
                    <Col span={12} offset={2}>
                      <label>ERP Code</label>
                      <Input
                        name="Erp_Code"
                        //   value={userData.Erp_Code}
                        value={
                          allData.Erp_Code
                            ? allData.Erp_Code
                            : userData.Erp_Code
                        }
                        onChange={handleChange}
                        placeholder={allData.Erp_Code ? allData.Erp_Code : ""}
                      />
                      <label>Account Owner</label>
                      <Input
                        name="Account_owner"
                        placeholder={allData.Erp_Code ? allData.Erp_Code : ""}
                        //   value={userData.Account_owner}
                        value={
                          allData.Account_owner
                            ? allData.Account_owner
                            : userData.Account_owner
                        }
                        onChange={handleChange}
                      />
                    </Col>

                    <hr />
                  </Row>
                  <br />
                  <Row>
                    <Col span={10}>
                      <label>Invoice Number</label>
                      <Input
                        name="Invoice_number"
                        //   value={userData.Invoice_number}
                        value={
                          allData.Invoice_number
                            ? allData.Invoice_number
                            : userData.Invoice_number
                        }
                        onChange={handleChange}
                        placeholder={
                          allData.Invoice_number ? allData.Invoice_number : ""
                        }
                      />
                      <label>Taxable Amount</label>
                      <Input
                        name="taxable_amount"
                        //   value={userData.taxable_amount}
                        onChange={handleChange}
                        value={
                          allData.taxable_amount
                            ? allData.taxable_amount
                            : userData.taxable_amount
                        }
                        placeholder={
                          allData.taxable_amount ? allData.taxable_amount : ""
                        }
                      />
                    </Col>
                    <Col span={12} offset={2}>
                      <label>Date</label>
                      <br />
                      <Input
                        type="date"
                        name="date"
                        //   value={userData.date}
                        value={allData.date ? allData.date : userData.date}
                        onChange={handleChange}
                        placeholder={allData.Date ? allData.Date : ""}
                      />
                      <br />
                      <label>Due Date</label>
                      <Input
                        type="date"
                        name="due_date"
                        //   value={userData.due_date}
                        value={
                          allData.due_date
                            ? allData.due_date
                            : userData.due_date
                        }
                        onChange={handleChange}
                        placeholder={allData.due_date ? allData.due_date : ""}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Row>
                        <Col span={6}>
                          <label>GST Value</label>
                          <Input
                            name="GST_value"
                            //   value={userData.GST_value}
                            value={
                              allData.GST_value
                                ? allData.GST_value
                                : userData.GST_value
                            }
                            onChange={handleChange}
                            placeholder={
                              allData.GST_value ? allData.GST_value : ""
                            }
                          />
                        </Col>
                        <Col span={6} offset={2}>
                          <label>TDS-TCS</label>
                          <Input
                            name="TDS_TCS"
                            //   value={userData.TDS_TCS}
                            value={
                              allData.TDS_TCS
                                ? allData.TDS_TCS
                                : userData.TDS_TCS
                            }
                            onChange={handleChange}
                            placeholder={allData.TDS_TCS ? allData.TDS_TCS : ""}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col span={6}>
                      <label>Credit Period</label>
                      <Input
                        name="Credit_Period"
                        //   value={userData.Credit_Period}
                        value={
                          allData.Credit_Period
                            ? allData.Credit_Period
                            : userData.Credit_Period
                        }
                        onChange={handleChange}
                        placeholder={
                          allData.Credit_Period ? allData.Credit_Period : ""
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={10}>
                      <label>
                        <b>Invoice Total</b>
                      </label>
                      <Input
                        name="Invoice_Total"
                        //   value={userData.Invoice_Total}
                        value={
                          allData.Invoice_Total
                            ? allData.Invoice_Total
                            : userData.Invoice_Total
                        }
                        onChange={handleChange}
                        placeholder={
                          allData.Invoice_Total ? allData.Invoice_Total : ""
                        }
                      />
                      <label>
                        <b>Receivable Amount</b>
                      </label>
                      <Input
                        name="Receivable_amount"
                        //   value={userData.Receivable_amount}
                        value={
                          allData.Receivable_amount
                            ? allData.Receivable_amount
                            : userData.Receivable_amount
                        }
                        onChange={handleChange}
                        placeholder={
                          allData.Receivable_amount
                            ? allData.Receivable_amount
                            : ""
                        }
                      />
                    </Col>
                    <Col span={12} offset={2}>
                      <label>Other</label>
                      <Input
                        name="other"
                        //   value={userData.other}
                        value={allData.other ? allData.other : userData.other}
                        onChange={handleChange}
                        placeholder={allData.other ? allData.other : ""}
                      />
                      <label>Amount Received</label>
                      <Input
                        name="Amount_Received"
                        //   value={userData.Amount_Received}
                        value={
                          allData.Amount_Received
                            ? allData.Amount_Received
                            : userData.Amount_Received
                        }
                        onChange={handleChange}
                        placeholder={
                          allData.Amount_Received ? allData.Amount_Received : ""
                        }
                      />
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col span={10} offset={2}>
                <div className="secondSidebtn">
                  <Button className="sbtn" type="" onClick={""}>
                    Invoice
                  </Button>
                  <Button className="sbtn" type="" onClick={""}>
                    E-Way Bill
                  </Button>
                  <Button className="sbtn" type="" onClick={""}>
                    GRN
                  </Button>
                  <Upload>
                    <Button icon={<UploadOutlined />}style={{marginTop:"18%"}}>Docket</Button>
                  </Upload>
                </div>

                <div className="secondSidebtn">
                  <Button className="sbtn" type="" onClick={""}>
                    PO/WO
                  </Button>
                  <Button className="sbtn" type="" onClick={""}>
                    DC
                  </Button>
                  <Button className="sbtn" type="" onClick={""}>
                    Other-1
                  </Button>
                  <Upload>
                    <Button icon={<UploadOutlined />}style={{marginTop:"18%"}}>Other-2</Button>
                  </Upload>
                </div>
                <div className="uploadbox"></div>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer>
          <Row>
            <Col span={24} offset={14}>
              {/* <FormComp/> */}
              <Button className="bbtn" type="primary" onClick={getData}>
                Get Data
              </Button>
              <Button className="bbtn" type="primary" onClick={reset}>
                RE-SET
              </Button>
              <Button className="bbtn" type="primary" onClick={saveFun}>
                SAVE
              </Button>
              <Button className="bbtn" type="primary">
                MOVE TO SETTLEMENT
              </Button>

              {/* <div className="secondSidebtn">
                <Button className="bbtn" type="primary" onClick={""}>
                  PO/WO
                </Button>
                <Button className="bbtn" type="primary" onClick={""}>
                  DC
                </Button>
                <Button className="bbtn" type="primary" onClick={""}>
                  Other-1
                </Button>
                <Button className="bbtn" type="primary">
                  Other-2
                </Button>
              </div> */}
            </Col>
          </Row>
        </Footer>
      </Layout>

      <section></section>
    </div>
  );
}

export default PaperTree;
