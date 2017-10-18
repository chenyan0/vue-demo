<template>
    <el-input-number v-model="number" :min="1" :max="10" size="small">
    </el-input-number>
</template>
<script>
export default {
    props: {
        max: {
            type: Number,
            default: 5
        },
        min: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            number: this.min
        }
    },
    watch: {
        number() {
            console.log(this.number);
            this.$emit('on-change', this.number)
        }
    },

    // methods: {
    //   handleChange(value) {
    //     console.log(value);
    //       this.$emit('on-change', value)
    //   }
    // }
};
</script>