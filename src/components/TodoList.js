import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({
    items, // Multi-itmes
    onCompleteItem, // Passed the item's _id
    onChangeItemDescription // Passed the item's_id and the new description
}) {
    return (
      <div>
      {
         items.map((item) => (
              <TodoItem
                key={ item._id }
                completed={ item.completed }
                description={ item.description }
                onComplete={
                  () => onCompleteItem(item._id)
                }
                onChangeDescription={
                  // This todo item just changed its description,
                  // so let our parent know not only the description
                  // but also the id of the item
                  (newDescription) => onChangeItemDescription(item._id, newDescription)
                }
              />
          ))
      }
      </div>
    )
}
