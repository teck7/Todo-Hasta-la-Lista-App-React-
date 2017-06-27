import React from 'react';
import Checkbox from './Checkbox';
import Field from './Field';

export default function TodoItem({
    description,
    completed,
    onComplete,
    onChangeDescription
}) {
    return (
      <div>
          <Checkbox
              label='Completed'
              checked={ completed }
              onChange={ onComplete }
          />
          <Field
              label='Description: '
              value={ description }
              onChange={ onChangeDescription }
          />
      </div>
    )
}
