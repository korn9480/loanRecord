<template>
    <div class="navbar">
      <a class="active" href="ข้อมูลลูกหนี้.html">ข้อมูลลูกหนี้</a>
      <a href="รายงานผล.html">รายงานผล</a>
      <a href="เช็คสถานะ.html">เช็คสถานะ</a>
      <a href="คลังทรัพย์สิน.html">คลังทรัพย์สิน</a>
      <a href="ผู้จัดการเ.html">ผู้จัดการ</a>
      <a href="กองทุน.html">กองทุน</a>
      <a href="ประวัติการทำรายการ.html">ประวัติการทำรายการ</a>
      <a href="เเจ้งเตือน.html">เเจ้งเตือน</a>
      <a href="ตั้งค่า.html">ตั้งค่า</a>
    </div>
  
  
    <h2 style="text-align:center;">ตารางลูกหนี้</h2>
  
  
    <div class="search-container">
      <input type="text" id="searchInput" placeholder="พิมพ์เลขบัตรประชาชน...">
      <button type="button" onclick="searchTable()">ค้นหาเลขบัตรประชาชน</button>
    </div>
  
  
  
    <div class="row">
      <div class="column">
        <div class="search-container">
          <input type="text" id="newSearchInput1" placeholder="พิมพ์ชื่อผู้จัดการ">
          <button type="button" onclick="customSearch1()">ค้นหาผู้จัดการ</button>
        </div>
      </div>
      <div class="column">
        <div class="search-container">
          <input type="text" id="newSearchInput2" placeholder="พิมพ์ชื่อหัวหน้าสาขา">
          <button type="button" onclick="customSearch2()">ค้นหาหัวหน้าสาขา</button>
        </div>
      </div>
      <div class="column">
        <div class="search-container">
          <input type="text" id="newSearchInput3" placeholder="พิมพ์ชื่อผู้รับดูเเล">
          <button type="button" onclick="customSearch3()">ค้นหาผู้จัดการดูเเล</button>
        </div>
      </div>
  
    </div>
  
  
  
  
    <div class="search-container2">
      <select id="statusFilter">
        <option value="" selected>ทั้งหมด</option>
        <option value="อยู่ในสัญญา">อยู่ในสัญญา</option>
        <option value="เลยกำหนดสัญญา">เลยกำหนดสัญญา</option>
        <option value="ครบกำหนดชำระ">ครบกำหนดชำระ</option>
        <option value="ชำระครบ">ชำระครบ</option>
        <option value="เเบล็คลิช">เเบล็คลิช</option>
      </select>
      <button type="button" onclick="searchIdCard2()">ค้นหาสถานะ</button>
    </div>
  
  
  
  
  
  
  
    <div class="row">
      <div class="column">
        <div style="text-align: center;">ยอดเงินรวมตามสถานะ</div>
        <div id="totalPrincipalAmount" style="text-align: center;">เงินต้นทั้งหมด:</div>
        <div id="totalInterestAmount" style="text-align: center;">ดอกเบี้ยทั้งหมด:</div>
        <div id="totalRefundAmount" style="text-align: center;">เงินที่ต้องคืนทั้งหมด</div>
      </div>
      <div class="column">
        <div id="totalid_card" style="text-align: center;"></div>
        <div id="totalDebtorsInContract" style="text-align: center;"></div>
        <div id="debtorsWithContracts" style="text-align: center;"></div>
        <div id="debtorsWhoExceededContracts" style="text-align: center;"></div>
        <div id="fullyPaidDebtors" style="text-align: center;"></div>
        <div id="debtorsBlacklist" style="text-align: center;"></div>
      </div>
      <div class="column">
        <div style="text-align: center;">ยอดเงินรวมสะสม</div>
        <div id="totalPrincipal" style="text-align: center;"></div>
        <div id="totalAccumulatedInterest" style="text-align: center;"></div>
        <div id="totalNetProfit" style="text-align: center;"></div>
      </div>
    </div>
  
  
  
  
    <div class="button-container">
      <button class="custom-button" onclick="window.location.href='บันทึกข้อมูลลูกหนี้.html';">
        <a href="บันทึกข้อมูลลูกหนี้.html" class="button-link">บันทึกข้อมูลลูกหนี้</a>
      </button>
    </div>
  
  
  
  
  
  
  
    <table id="your_table_id">
      <thead>
        <tr>
          <th>ลำดับ</th>
          <th>วันที่บันทึก</th>
          <th>เลขบัตรประชาชน</th>
          <th>ชื่อ</th>
          <th>นามสกุล</th>
          <th>เงินต้น</th>
          <th>ดอกเบี้ย</th>
          <th>เงินที่ต้องคืน</th>
          <th>สถานะ</th>
          <th>เงินต้นสะสม</th>
          <th>ดอกเบี้ยสะสม</th>
          <th>กำไรสุทธิสะสม</th>
          <th>ผู้จัดการ</th>
          <th>ผู้จัดการดูแล</th>
          <th>หัวหน้าสาขา</th>
          <th>จัดการ</th>
          <th>สัญญา</th>
        </tr>
      </thead>
      <tbody id="debtor-table-body">
        <tr id="app" v-for="(item,index) in items">
          <td>{{ index +1 }}</td> <!-- Reverse the index -->
          <td>{{ item.date }}</td>
          <td>{{item.id_card_number}}</td>
          <td>{{ item.fname }}</td>
          <td>{{ item.lname }}</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>
            <button onclick="redirectToEdit('${row._id}')">แก้ไข</button>
            <button onclick="redirectToDelete('${row._id}')">ลบ</button>
          </td>
          <td><router-link :to="{path:'/lond/'+item._id}">สัญญา</router-link></td>
        </tr>
      </tbody>
    </table>
  </template>
  
  
<style>
  .navbar {
    overflow: hidden;
    background-color: #333;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
  }
  
  .navbar a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
  }
  
  .navbar a:hover {
    background-color: #ddd;
    color: black;
  }
  
  .navbar a.active {
    background-color: #555;
    color: white;
  }
  
  
  body {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    margin-top: 100px;
  }
  
  .container {
    width: 60%;
    margin: auto;
    margin-top: 50px;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
    margin: auto;
    margin-top: 80px;
  }
  
  th,
  td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }
  
  th {
    background-color: #333;
    color: white;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  
  
  .search-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .search-container input[type=text] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }
  
  .search-container button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .search-container button:hover {
    background-color: #45a049;
  }
  
  
  
  .search-container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    /* จัดให้อยู่ตรงกลางตามแนวตั้ง */
    margin-bottom: 20px;
  }
  
  .search-container2 input[type=text] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    margin-right: 5px;
    /* เพิ่มระยะห่างของ input กับปุ่มค้นหา */
  }
  
  .search-container2 button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .search-container2 button:hover {
    background-color: #45a049;
  }
  
  .search-container2 select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    margin-left: 5px;
    /* เพิ่มระยะห่างของปุ่มค้นหา กับ dropdown */
  }
  
  
  .button-container {
    text-align: center;
    margin-top: 20px;
  }
  
  .custom-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .custom-button:hover {
    background-color: #45a049;
  }
  
  .button-link {
    text-decoration: none;
    color: white;
  }
  
  
  /* Common styles */
  .column {
    float: left;
    width: 33.33%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  
  /* Style for totalDebtorsInContract */
  #totalDebtorsInContract {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  /* Style for totalIDCard */
  #totalIDCard {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  /* Style for debtorsWithInterest */
  #debtorsWithInterest {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  /* Style for debtorsWithContracts */
  #debtorsWithContracts {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  #debtorsWhoExceededContracts {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  /* Style for fullyPaidDebtors */
  #fullyPaidDebtors {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  /* Style for debtorsBlacklist */
  #debtorsBlacklist {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  /* Style for totalPrincipalAmount */
  #totalPrincipalAmount {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  /* Style for totalInterestAmount */
  #totalInterestAmount {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  /* Style for totalRefundAmount */
  #totalRefundAmount {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  /* Style for totalPrincipal */
  #totalPrincipal {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  /* Style for totalShare */
  #totalAccumulatedInterest {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  /* Style for totalNetProfit */
  #totalNetProfit {
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
  }
  
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  
  
  .s {
    color: green;
  }
  
  .b {
    color: red;
  }
  
  .w {
    color: rgb(26, 133, 233);
  }
  
  .l {
    color: rgb(242, 160, 9);
  }
  
  .d {
    color: rgb(248, 7, 204)
  }
</style>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        items: []
      };
    },
    mounted() {
      console.log("dkdkdk")
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('http://localhost:3000/api/debtor-data');
          this.items = response.data;
          console.log("🚀 ~ fetchData ~ items:", items)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
  };
  </script>