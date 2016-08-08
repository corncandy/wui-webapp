import React, { Component, PropTypes } from 'react'
import FieldGroup from './FieldGroup'

export default class DataFilter extends Component {
  changeFilter (field, e) {
    this.props.onChange({
      field: field,
      value: e.target.value
    })
  }

  render () {
    const { data: { meta, filterFields, currentFilter },
      onCreate, onFilter, onChange } = this.props

    return (
      <div className='box-header'>
        <FieldGroup
          columns={4}
          fields={filterFields}
          meta={meta}
          item={currentFilter}
          onUpdate={onChange}>
          <div className='row col-sm-12'>
            {
              onFilter &&
                <div className='col-sm-1' >
                  <label></label>
                  <input
                    type='button'
                    style={{marginTop: '5px'}}
                    className='btn btn-info '
                    onClick={onFilter}
                    value={this.props.filterText || '查询'} />
                </div>
            }
          {
            onCreate &&
              <div className='col-sm-1' >
                <label></label>
                <input
                  type='button'
                  style={{marginTop: '5px'}}
                  className='btn btn-primary'
                  onClick={onCreate}
                  value={this.props.createText || '新增'} />
              </div>
          }

          </div>
        </FieldGroup>
      </div>
    )
  }
}

DataFilter.propTypes = {
  data: {
    meta: PropTypes.object,
    currentFilter: PropTypes.object,
    filterFields: PropTypes.array.isRequired
  },
  onCreate: PropTypes.func,
  onFilter: PropTypes.func,
  filterText: PropTypes.string,
  createText: PropTypes.string,
  onChange: PropTypes.func.isRequired
}
