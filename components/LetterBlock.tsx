import { useMemo } from "react";
import { getStylesByStatus, StatusTypes } from '../utils'

interface Props {
  letter?: string;
  status?: StatusTypes;
}

export const LetterBlock = ({ letter, status  = 'empty' }: Props) => {

  const blockStyles = useMemo(() => getStylesByStatus(status), [status]);

  return (
    <div className={blockStyles}>
      <p className="text-3xl font-bold">{letter}</p>
    </div>
  );
};