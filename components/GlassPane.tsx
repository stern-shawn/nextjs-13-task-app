import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {}

const GlassPane = ({ children, className }: InputProps) => {
  return (
    <div
      className={clsx(
        'glass rounded-2xl border-solid border-2 border-gray-200',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
