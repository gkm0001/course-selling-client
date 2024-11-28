import React from 'react';

function Tags(props: any): JSX.Element {
  const { name } = props;
  return (
    <li className="bg-gray-300 text-sm rounded-full px-4 py-1 inline-block mr-2 mb-2 cursor-pointer hover:opacity-80">
      {name}
    </li>
  );
}

export default Tags;
