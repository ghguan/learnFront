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
          <tbody v-if="list.length > 0">
            <tr v-for="(item, index) in list" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.subject }}</td>
              <td :class="{'red':item.score < 60}">{{ item.score }}</td>
              <td>{{ format(item.date) }}</td>
              <!-- 删除，如果有id情况，一般情况，直接传id -->
              <td><a href="#" @click.prevent="del(item.id)">删除</a></td>
            </tr>
          </tbody>
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
                <span>总分：{{ total }}</span>
                <span style="margin-left:50px">平均分：{{ average }}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <!-- 右侧添加 -->
      <div class="form">
        <div class="form-item">
          <div class="label">科目：</div>
          <div class="input">
            <input type="text" v-model.trim="subject" placeholder="请输入科目" />
          </div>
        </div>
        <div class="form-item">
          <div class="label">分数：</div>
          <div class="input">
            <input type="text" v-model.number="score" placeholder="请输入分数" />
          </div>
        </div>
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
  // 导入dayjs
  import dayjs from 'dayjs'
  export default {
    name: 'ScoreCase',
    data () {
      return {
          // 如果本地存在local数据，就渲染local的数据，否则才只用后面的默认数据  
        //   list: a || b 
        // 
        list: JSON.parse(localStorage.getItem('stu-list')) || [
          {id: 15, subject: '语文', score: 89, date: new Date('2022/06/07 10:00:00')},
          {id: 27, subject: '数学', score: 100, date: new Date('2022/06/07 15:00:00')},
          {id: 32, subject: '英语', score: 56, date: new Date('2022/06/08 10:00:00')},
          {id: 41, subject: '物理', score: 76, date: new Date('2022/06/08 10:00:00')}
        ],
        subject: '',
        score: '',
      }
    },
    methods:{
        del(id){
            this.list = this.list.filter(el => el.id !== id) 
        },
        add(){
            // 模拟简单的校验
            if (this.subject === '' || this.score > 100){
                return alert('请录入正确的成绩')
            }
            // 往数组list中push数据
            this.list.push({
                id:+new Date(),
                subject:this.subject,
                score:this.score,
                date:new Date()
            })
            // 重置input，清空
            this.score = this.subject = ''
            
        },
        format(date){
            return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    computed:{
        // 求和，累加 
        total(){
            const res = this.list.reduce((pre, cur) => {
                return pre + cur.score
            }, 0)
            return res
        },
        // 求平均值
        average(){
            const res = this.list.length > 0 ? this.total / this.list.length : 0
            return res.toFixed(2) 
        }
    },
    watch:{
        list:{
            deep:true,
            handler(newVal){
                localStorage.setItem('stu-list', JSON.stringify(newVal))
            }
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