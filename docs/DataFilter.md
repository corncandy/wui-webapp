# DataFilter

```react
---
<DataFilter
  data={{
    meta: {
      userID: {
        label: '用户ID'
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
      }
    },
    filterFields: ['userID', 'status'],
    currentFilter: {}
  }}
  onCreate={() => alert('create')}
  onFilter={() => alert('filter')}
  onChange={() => {}}
/>
```
