<template>
<div >
     <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://myappr.herokuapp.com/" target="_blank">
           Fitness Freak
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/user-dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/workouts">Workouts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/exercise">Exercises</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/friends">Friends</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mr-4" to="/user-profile">Profile</router-link>
          </li>
          <li class="nav-item" style="">
            <button class="btn btn-outline-danger">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container" style="margin-top: 150px; ">
			<p v-html="error"> </p>
				
			<!-- <div class="input-group" style="padding-bottom: 20px; z-index: 1000;">
				<span class="input-group-addon"><label>Add friends from Userlist:</label>
				<select label="email" :options="users" v-model="follower">
				</select>
				<a v-on:click="addClick" class="btn btn-primary pull-right">
				<i class="fa fa-plus"></i> Add </a></span>
			</div> -->
			<div class="portlet box blue" style="width:1000px;">
				<div class="portlet-title">
					<div class="caption">
						<i class="fa fa-gift"></i>Friends List
					</div>
				</div>
				<div class="portlet-body">
					<table class="table">	
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Email Id
                        </td>  
                         <td>
                            View
                        </td>    
                    </tr>        				
					<tr v-for = "t in friends" v-bind:key = "t.name">
						<td>
							{{ t.name }} <i class="fa fa-circle" v-bind:class="t.available == true ? 'online' : 'offline'"/>
						</td>
                        <td>
							{{ t.mail }} <i class="fa fa-circle" v-bind:class="t.available == true ? 'online' : 'offline'"/>
						</td>
						<td>
							<a class="btn btn-primary pull-right" v-on:click="viewProfile(t.email)">
							View Profile <i class="fa fa-search"></i></a>
						</td>
					</tr>
					</table>					
				</div>
			</div>
		</div>
</div>    
</template>

