# DataTable

```react
---
<DataTable
  data={{
    meta: {
      userID: {
        label: '用户ID'
      },
      userName: {
        label: '用户姓名',
        required: true,
        maxLength: 20
      },
      mobile: {
        label: '手机号码',
        type: 'INPUT_TYPE_PHONE',
        required: true,
        maxLength: 11
      },
      email: {
        label: 'Email',
        required: true,
        maxLength: 50,
        type: 'INPUT_TYPE_EMAIL'
      },
      status: {
        label: '用户状态',
        type: 'INPUT_TYPE_SELECT',
        options: [{
          label: '启用',
          value: '0'
        }, {
          label: '停用',
          value: '1'
        }]
      },
    },
    tableFields: ['userID', 'userName', 'mobile', 'email', 'status'],
    list: [{
      userID: '1001', userName: '用户1', mobile: '13813813888', email: 'user1@wanda.cn', status: '1'
    }, {
      userID: '1002', userName: '用户2', mobile: '13913913999', email: 'user2@wanda.cn', status: '0'
    }]
  }}
  operations={[{
    name: '编辑',
    callback: () => { alert('edit') }
  }]} />
```
