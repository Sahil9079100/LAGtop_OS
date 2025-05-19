import React, { useState } from 'react';

const mockFolders = {
  id: 'root',
  name: 'Home',
  children: [
    {
      id: '1',
      name: 'Documents',
      children: [
        {
          id: '2',
          name: 'MyFolder',
          children: [
            {
              id: '3',
              name: 'hello.txt',
              children: [
                {
                  id: '3',
                  name: 'hello.txt',
                  children: [
                    {
                      id: '3',
                      name: 'hello.txt',
                      children: [
                        {
                          id: '3',
                          name: 'hello.txt',
                          children: [
                            {
                              id: '3',
                              name: 'hello.txt',
                              children: [
                                {
                                  id: '3',
                                  name: 'hello.txt',
                                  children: [
                                    {
                                      id: '3',
                                      name: 'hello.txt',
                                      children: []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '4',
      name: 'Pictures',
      children: []
    }
  ]
};

// Recursive Folder component
const Folder = ({ folder, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ marginLeft: depth * 1, marginBottom: '5px', background: 'rgba(55, 55,255, 0.0)', borderRadius: '5px', padding: '3px' }}>
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        📁 {folder.name}
      </div>
      {isOpen && folder.children.map(child => (
        <Folder key={child.id} folder={child} depth={depth + 2} />
      ))}
    </div>
  );
};

export const Test = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', background: 'rgba(10, 10,10, 0.9)', color: 'white' , height: '100vh'}}>
      <h2>📂 File Explorer (Test)</h2>
      <Folder folder={mockFolders} />
    </div>
  );
};
export default Test;