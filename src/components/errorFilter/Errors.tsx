import { FC } from 'react';
import './errors.scss';

interface IErrorProps {
  text: string;
}

export const Error: FC<IErrorProps> = ({ text }) => {
  return <div className="filterError">{text}</div>;
};
