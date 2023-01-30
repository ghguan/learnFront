<template>
  <section class="todoapp">
    <!-- 头部部分 -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="请输入任务名称" autofocus />
    </header>

    <!-- 主体部分 -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- 当任务已完成，可以给 li 加上 completed 类，会让元素加上删除线 -->
        <li class="completed">
          <div class="view">
            <input class="toggle" type="checkbox" checked />
            <label>读万卷书</label>
            <button class="destroy"></button>
          </div>
        </li>
        <li>
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>行万里路</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>

    <!-- 底部部分 -->
    <footer class="footer">
      <span class="todo-count"><strong>0</strong>剩余</span>
      <ul class="filters">
        <li>
          <a class="selected" href="#/">全部</a>
        </li>
        <li>
          <a href="#/active">进行中</a>
        </li>
        <li>
          <a href="#/completed">已完成</a>
        </li>
      </ul>
      <button class="clear-completed">清除已完成</button>
    </footer>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
