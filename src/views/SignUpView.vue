<template>
    <div class="container">
        <h1>Register Here</h1>
        <div>
            <label> Enter your first name: <input type="text" v-model="firstName"></label>
            <br><br>
            <label> Enter your last name: <input type="text" v-model="lastName"></label>
            <br><br>
            <label>Enter your age: <input type="text" v-model="userAge"></label>
            <br><br>
            <label>Enter your gender: <input type="text" v-model="Gender"></label>
            <br><br>
            <label>Enter your user role: <input type="text" v-model="userRole"></label>
            <br><br>
            <label> Enter your email address: <input type="text" v-model="emailAdd"></label>
            <br><br>
            <label> Enter your user password: <input type="text" v-model="userPass"></label>
            <br><br>
            <label> Enter your user profile name: <input type="text" v-model="userProfile"></label>
            <br><br>
            <button >Submit</button>
        </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>