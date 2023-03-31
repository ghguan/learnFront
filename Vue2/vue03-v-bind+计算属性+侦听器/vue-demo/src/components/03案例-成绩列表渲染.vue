<template>
    <div class="score-case">
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>编号</th>
              <th>科目</th>
              <th>成绩</th>
              <th>考试时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody v-if="list.length>0">
            <!-- 1.渲染页面数据 v-for -->
            <tr v-for="(item,index) in list" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.subject }}</td>
              <!-- 2.设置类名开关 -->
              <td :class="{red:item.score<60?true:false}">{{item.score}}</td>
              <!-- 4.格式化时间 day.js                                                                                                                              -->
              <td>{{format(item.date)}}</td>
              <!-- 3.绑定点击事件，阻止默认行为 -->
              <td><a href="#" @click.prevent="del(item.id)">删除</a></td>
            </tr>
          </tbody>
          <!-- 4.无数据时显示 -->
          <!-- 怎么表示  数组为0 呢？==> arr.length == 0-->
          <tbody v-else>
            <tr>
              <td colspan="5">
                <span class="none">暂无数据</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5">
                <span>总分：{{ sum }}</span>
                <span style="margin-left:50px">平均分：{{ arg }}</span>
              </td>
            </tr>                   
          </tfoot>
        </table>
      </div>
      <!-- 新增数据的表单模块 -->
      <!-- 1.获取输入数据 => v-model="自定义变量名" => data中定义变量存储数据： return{ 自定义变量名:''} 
        1需要对数据进行处理 => 前后空格.trim，数字.number
        2判断输入是否合规 校验
      -->
      <!-- 2.给按钮绑定事件 传参时必加括号，其余可省略 -->
      <!-- 3.给list数组添加对象 -->
      <!-- 4.重置表单 -->
      <div class="form">
        <!-- 学科 -->
        <div class="form-item">
          <div class="label">科目：</div>
          <div class="input">
            <input type="text" placeholder="请输入科目" v-model="subject" />
          </div>
        </div>
        <!-- 分数 -->
        <div class="form-item">
          <div class="label">分数：</div>
          <div class="input">
            <input type="text" placeholder="请输入分数" v-model="score" />
          </div>
        </div>
        <!-- 添加 -->
        <div class="form-item">
          <div class="label"></div>
          
          <div class="input">
            <button class="submit" @click="add">添加</button>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import dayjs from '../../node_modules/dayjs'
  export default {
    name: 'ScoreCase',
    data () {
      return {
        list: [
          {id: 15, subject: '语文', score: 89, date: new Date('2022/06/07 10:00:00')},
          {id: 27, subject: '数学', score: 100, date: new Date('2022/06/07 15:00:00')},
          {id: 32, subject: '英语', score: 56, date: new Date('2022/06/08 10:00:00')},
          {id: 41, subject: '物理', score: 76, date: new Date('2022/06/08 10:00:00')}
        ],
        subject: '',
        score: '',
        // red:{red:xxx.score<60?true:false}？？这里该怎么定义score呢
        
      } 
    },
    methods:{
       // 删除本质：删除数组中的数据，重新渲染页面
       del(id){
            this.list = this.list.filter(el => {
                return el.id !== id
            })
       },
       //添加    
       add(){
            // 模拟简单的校验：
            if(this.subject == '' || this.score > 100){
                return alert('请输入正确的成绩')
                // 这个return：执行return后，不执行后续代码
            }
            // 添加本质：往数组中添加数据，对应数组中的数据类型 => 对象
            this.list.push({
                id:+new Date(),
                subject: this.subject,
                score: this.score,
                date:new Date(),
            })
            // 重置表单:输入框内容置空
            this.subject = '',
            this.score = ''
            
       },
       //格式化时间
       format(date){
          return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
       }            
    },
    computed:{
      sum(){
        return this.list.reduce((sum,item) => {
          return sum + item.score
        },0)
        // reduce((pro,cur)=>{return pro+cur},0)
        
        
      },
      arg(){
        return this.list.length ? (this.sum / this.list.length ).toFixed(2) : 0
      }
    }   
  };
  </script>
  
  <style lang="less">
  .score-case {
    width: 1000px;
    margin: 50px auto;
    display: flex;
    .table {
      flex: 4;
      table {
        width: 100%;
        border-spacing: 0;
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        th {
          background: #f5f5f5;
        }
        tr:hover td {
          background: #f5f5f5;
        }
        td,
        th {
          border-bottom: 1px solid #ccc;
          border-right: 1px solid #ccc;
          text-align: center;
          padding: 10px;
          &.red {
            color: red;
          }
        }
      }
      .none {
        height: 100px;
        line-height: 100px;
        color: #999;
      }
    }
    .form {
      flex: 1;
      padding: 20px;
      .form-item {
        display: flex;
        margin-bottom: 20px;
        align-items: center;
      }
      .form-item .label {
        width: 60px;
        text-align: right;
        font-size: 14px;
      }
      .form-item .input {
        flex: 1;
      }
      .form-item input,
      .form-item select {
        appearance: none;
        outline: none;
        border: 1px solid #ccc;
        width: 200px;
        height: 40px;
        box-sizing: border-box;
        padding: 10px;
        color: #666;
      }
      .form-item input::placeholder {
        color: #666;
      }
      .form-item .cancel,
      .form-item .submit {
        appearance: none;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 10px;
        margin-right: 10px;
        font-size: 12px;
        background: #ccc;
      }
      .form-item .submit {
        border-color: #069;
        background: #069;
        color: #fff;
      }
    }
  }
  </style>