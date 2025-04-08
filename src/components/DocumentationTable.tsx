import React from 'react';
import '../styles/DocumentationTable.css';
import Image from './Image';

interface DocumentItem {
  imageSrc: string;
  title: string;
  linkUrl?: string;
  linkText?: string;
  altText?: string;
}

interface DocumentationTableProps {
  items: DocumentItem[];
}

const DocumentationTable: React.FC<DocumentationTableProps> = ({ items }) => {
  return (
    <table className="documentation">
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>
              <Image src={item.imageSrc} alt={item.altText || ''} />
            </td>
            <td>
              {item.title}
              {item.linkUrl && item.linkText && (
                <>
                  {' [ '}
                  <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                    {item.linkText}
                  </a>
                  {' ] '}
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DocumentationTable;