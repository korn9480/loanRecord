<!-- import { default } from '../App.vue'; -->
<style scoped>
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




.button-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.column {

    margin: 10px;
    /* Adjust the margin as needed */
}

.custom-button {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 150px;
    /* ปรับขนาดกว้างตามที่ต้องการ */
    height: 40px;
    /* ปรับขนาดสูงตามที่ต้องการ */
}


.button-link {
    text-decoration: none;
    color: white;
}

.custom-button2 {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 150px;
    /* ปรับขนาดกว้างตามที่ต้องการ */
    height: 40px;
    /* ปรับขนาดสูงตามที่ต้องการ */
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
    color: rgb(248, 7, 204);
}
</style>
<template>
    <div class="navbar">
        <a class="active" href="ข้อมูลลูกหนี้.html">ข้อมูลลูกหนี้</a>
        <a href="รายงานผล.html">รายงานผล</a>
        <a href="เช็คสถานะ.html">เช็คสถานะ</a>
        <a href="คลังทรัพย์สิน.html">คลังทรัพย์สิน</a>
        <a href="ผู้จัดการ.html">ผู้จัดการ</a>
        <a href="กองทุน.html">กองทุน</a>
        <a href="ประวัติการทำรายการ.html">ประวัติการทำรายการ</a>
        <a href="เเจ้งเตือน.html">เเจ้งเตือน</a>
        <a href="ตั้งค่า.html">ตั้งค่า</a>
    </div>

    <h2 style="text-align:center;">ตารางสัญญารายบุคคล</h2>



    <div style="text-align: center;">เลขบัตรประชาชน:<span id="id-card-number"></span></div>
    <div style="text-align: center;">ชื่อ:<span id="first-name"></span></div>
    <div style="text-align: center;">นามสกุล:<span id="last-name"></span></div>

    <br>

    <div style="text-align: center;">ผู้จัดการ: John Smith</div>
    <div style="text-align: center;">ผู้จัดการดูเเล: -</div>
    <div style="text-align: center;">หัวหน้าสาขา: John Smith</div>
    <br>
    <br>


    <div class="button-container">
        <div class="column">
            <button class="custom-button" onclick="window.location.href='สัญญา.html';">สัญญา</button>
        </div>
        <div class="column">
            <button class="custom-button" onclick="window.location.href='คืนเงิน.html';">คืนเงิน</button>
        </div>
        <div class="column">
            <button class="custom-button" onclick="window.location.href='ส่วนเเบ่ง.html';">ส่วนเเบ่ง</button>
        </div>
    </div>



    <div class="button-container">
        <div class="column">
            <button class="custom-button2" onclick="window.location.href='บันทึกสัญญา.html';">บันทึกสัญญา</button>
        </div>
    </div>






    <table id="a">
        <thead>
            <tr>
                <th>รหัส</th>
                <th>บิล</th>
                <th>วันที่กู้</th>
                <th>ระยะเวลากู้</th>
                <th>วันที่คืน</th>
                <th>เงินต้น</th>
                <th>อัตราดอกเบี้ย</th>
                <th>ดอกเบี้ย</th>
                <th>ดอกปรับ</th>
                <th>ดอกยกมา</th>
                <th>รวมเงินที่ต้องคืน</th>
                <th>ใกล้สัญญา</th>
                <th>สถานะ</th>
                <th>เลยสัญญา</th>
                <th>จัดการ</th>
                <th>ยึดทรัพย์</th>
                <th>คืนเงิน</th>
            </tr>
        </thead>


        <tbody>
            <tr v-for="(item, index) in londs">
                <td>-</td>
                <td>-</td>
                <td>{{ item.loanDate }}</td>
                <td>{{ item.loanPeriod }}</td>
                <td>{{ item.returnDate }}</td>
                <td>{{ item.principal }}</td>
                <td>{{ item.interestRate }}</td>
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
                <td><button onclick="redirectToSeizeAssets('${row._id}')">ยึดทรัพย์</button></td>
                <td><button onclick="redirectToReturnMoney('${row._id}')">คืนเงิน</button></td>
            </tr>
        </tbody>
    </table>
    <div>{{ user_id }}</div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Lond',
    data() {
        return {
            user_id: "555",
            londs: []
        }
    },
    mounted() {
        this.user_id = this.$route.params.user_id;
        this.fetchData()
    },

    methods: {
        async fetchData() {
            console.log(this.user_id)
            try {
                const response = await axios.get(`http://localhost:3000/api/loan-data?debtor=${this.user_id}`);
                this.londs = response.data;
                console.log("🚀 ~ fetchData ~ londs:", londs)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
}
</script>