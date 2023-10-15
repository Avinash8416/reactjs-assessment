import { Card, Input, Layout, Menu, Select, Table } from 'antd';
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNfcSymbol } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping, faCoins, faCookieBite, faLightbulb, faMoneyBill, faRectangleAd, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { DollarOutlined, SearchOutlined } from '@ant-design/icons';
import { Pie } from '@ant-design/plots';
import profilePic from "./assets/images/profile_pic.jpg";
import tableImg from "./assets/images/table-image.jpg";

function App() {
  const [mobileView, setMobileView] = React.useState(false);

  const menuItems = [
    {
      key: "1",
      icon: <FontAwesomeIcon icon={faLightbulb} color="white"/>,
      label: "Dashboard",
    },
    {
      key: "2",
      icon: <FontAwesomeIcon icon={faCookieBite} color="white"/>,
      label: "Product",
    },
    {
      key: "3",
      icon: <FontAwesomeIcon icon={faUsers} color="white"/>,
      label: "Customers",
    },
    {
      key: "4",
      icon: <FontAwesomeIcon icon={faMoneyBill} color="white"/>,
      label: "Income",
    },
    {
      key: "5",
      icon: <FontAwesomeIcon icon={faRectangleAd} color="white"/>,
      label: "Promote",
    },
    {
      key: "6",
      icon: <FontAwesomeIcon icon={faCircleQuestion} color="white"/>,
      label: "Help",
    },
  ];

  function isMobile() {
    return mobileView;
  };

  window.onresize = () => {
    setMobileView(window.innerWidth < 500);
  };

  return (
    <Layout className="main-layout">
      <Layout.Sider
        className="main-sider"
        width="20%"
        collapsible
        collapsed={isMobile()}
        trigger={null}
      >
        <span className="heading">
          <FontAwesomeIcon icon={faNfcSymbol} /> Dashboard
        </span>
        <Menu
          className='menu'
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
        <div className="profile-info">
          <img src={profilePic} alt="Profile Pic"/>
          <div>
            <span>Evano</span>
            <span>Project Manager</span>
          </div>
          <span>&#8964;</span>
        </div>
      </Layout.Sider>
      <Layout className='main-content' width="80%">
        <Layout.Header className='content-heading'>
          <span>Hey Shahrukh &#128075;</span>
          <Input size="small" className="search-bar" placeholder='Search' prefix={<SearchOutlined />} />
        </Layout.Header>
        <Layout.Content className="content">
          <div className="basic-info">
            <Card className="card">
              <span className="earning">
                <DollarOutlined style={{fontSize: isMobile() ? "24px" :'32px', color: "#48BD75"}} />
              </span>
              <div className="info">
                <div>Earning</div>
                <div>$198k</div>
                <div><span className="success">&uarr;37.6%</span> this month</div>
              </div>
            </Card>
            <Card className="card">
              <span className="orders">
                <FontAwesomeIcon icon={faNoteSticky} size={isMobile()?"2x":"3x"} color="#A91BFF"/>
              </span>
              <div className="info">
                <div>Orders</div>
                <div>$2.4k</div>
                <div><span className="error">&darr;2%</span> this month</div>
              </div>
            </Card>
            <Card className="card">
              <span className="balance">
                <FontAwesomeIcon icon={faCoins} size={isMobile()?"2x":"3x"} color="#014CBC"/>
              </span>
              <div className="info">
                <div>Balance</div>
                <div>$2.4k</div>
                <div><span className="error">&darr;2.6%</span> this month</div>
              </div>
            </Card>
            <Card className="card">
              <span className="total-sales">
                <FontAwesomeIcon icon={faBagShopping} size={isMobile()?"2x":"3x"} color="#DD3245"/>
              </span>
              <div className="info">
                <div>Total Sales</div>
                <div>$89k</div>
                <div><span className="success">&uarr;11%</span> this month</div>
              </div>
            </Card>
          </div>
          <div className="middle-section">
            <div className="overview">
              <div className="head">
                <div>
                  <span>Overview</span>
                  <span>Monthly Earning</span>
                </div>
                <div>
                  <Select                  
                    defaultValue={3}
                    style={{width: isMobile() ? 80 : 150}}
                    className='dropdown'
                    options={[
                      { value: 1, label: "Monthly"},
                      { value: 3, label: "Quarterly"},
                      { value: 6, label: "Semi Annually"},
                      { value: 12,label: "Annually" },
                    ]}
                  />
                </div>
              </div>
              <div className="bar-graph">
                <div className="month value-5"><div className="bar" />Jan</div>
                <div className="month value-4"><div className="bar" />Feb</div>
                <div className="month value-9"><div className="bar" />Mar</div>
                <div className="month value-6"><div className="bar" />Apr</div>
                <div className="month value-8"><div className="bar" />May</div>
                <div className="month value-2"><div className="bar" />Jun</div>
                <div className="month value-8"><div className="bar" />Jul</div>
                <div className="month value-10"><div className="bar" />Aug</div>
                <div className="month value-9"><div className="bar" />Sep</div>
                <div className="month value-7"><div className="bar" />Oct</div>
                <div className="month value-6"><div className="bar" />Nov</div>
                <div className="month value-7"><div className="bar" />Dec</div>
              </div>
            </div>
            <div className="pie-chart">
                <div className='head'>
                  <span>Customers</span>
                  <span>Customers that buy products</span>
                </div>
                <div className='pie-chart-container'>
                  <Pie
                    data={[
                      {
                        type: '#F1EFFC',
                        value: 30,
                      },
                      {
                        type: '#633BEB',
                        value: 45,
                      },
                      {
                        type: '#F43497',
                        value: 25,
                      },
                    ]}
                    legend={false}
                    height={200}
                    appendPadding={10}
                    angleField={'value'}
                    colorField={'type'} 
                    radius={1}
                    innerRadius={0.6}
                    label={{
                      content: '',
                    }}
                    interactions={[]}
                    statistic={{
                      title: false,
                      content: {
                        style: {
                          whiteSpace: 'pre-wrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontSize: 10,
                        },
                        customHtml: `<div><span style="font-size:32px;">65%</span><br />Total New Customers<div>`,
                      },
                    }}
                  />
                </div>
            </div>
          </div>
          <div className="table-info">
            <div className='head'>
                <div className='title'>Product Sell</div>
                <div>
                  <Input size="small" className="search-bar" placeholder='Search' prefix={<SearchOutlined />} />
                  <Select                  
                    defaultValue={2}
                    style={{width: 150}}
                    className='dropdown'
                    options={[
                      { value: 1, label: "Last 30 Days"},
                      { value: 2, label: "Last 60 Days"},
                    ]}
                  />
                </div>
            </div>
            <div className='table-container'>
              <Table
                scroll={{
                  x: true
                }}
                dataSource={[
                  {
                    title: "Abstract 3D",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                    stock: 30,
                    price: 45.99,
                    sales: 40
                  },
                  {
                    title: "Sarphens Illustration",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                    stock: 27,
                    price: 39.55,
                    sales: 33
                  },
                  {
                    title: "Third Example",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                    stock: 30,
                    price: 10,
                    sales: 40
                  }
                ]}
              >
                <Table.Column
                  title="Product Name"
                  width={600}
                  render={(record) => (
                    <div className='product-name'>
                      {isMobile() ? null : <img src={tableImg} alt="smaple-mage"/>}
                      <div>
                        <span>{record.title}</span>
                        {isMobile() ? null : <span>{record.description}</span>}
                      </div>
                    </div>
                  )}
                /> 
                <Table.Column
                  title="Stock"
                  render={(record) => `${record.stock} in stock`}
                />
                <Table.Column
                  title="Price"
                  render={(record) => `$ ${record.price}`}
                />
                <Table.Column
                  title="Total Sales"
                  render={(record) => record.sales}
                />
              </Table>
            </div>
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
