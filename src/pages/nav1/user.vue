<template>
    <Table border :columns="columns5" :data="data5"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns5: [
                    {
                        title: '注册日期',
                        key: 'date',
                        sortable: true
                       
                    },
                    {
                        title: '会员号',
                        key: 'name'
                    },
                    {
                        title: '等级',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '余额',
                        key: 'address'
                    }
                ],
                data5: [
                    {
                        name: '2011325',
                        age: 3,
                        address: '32',
                        date: '2016-10-03'
                    },
                    {
                        name: '2011328',
                        age: 2,
                        address: '33',
                        date: '2016-10-01'
                    },
                    {
                        name: '2011326',
                        age: 3,
                        address: '2',
                        date: '2016-10-02'
                    },
                    {
                        name: '2011327',
                        age: 1,
                        address: '324',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>
