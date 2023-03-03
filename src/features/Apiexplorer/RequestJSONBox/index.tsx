import { TSocketEndpointNames } from '@site/src/configs/websocket/types';
import React from 'react';
import RequestResponseRenderer from '../RequestResponseRenderer';
import style from './RequestJSONBox.module.scss';

interface TRequestJSONBox<T extends TSocketEndpointNames> {
  handleChange: (e) => void;
  request_example: any;
  name: T;
  auth_required: number;
}

function RequestJSONBox<T extends TSocketEndpointNames>({
  handleChange,
  request_example,
  name,
  auth_required,
}: TRequestJSONBox<T>) {
  return (
    <div className={style.playgroundBox}>
      <div className={style.formContent}>
        <label className={style.inlineLabel}>Request JSON</label>
        <textarea
          id='playground-request'
          className={`${style.textareaRequest} ${style.playgroundRequest}`}
          placeholder={'Request JSON'}
          onChange={handleChange}
          value={request_example}
        ></textarea>
        <RequestResponseRenderer name={name} reqData={request_example} auth={auth_required} />
      </div>
    </div>
  );
}

export default RequestJSONBox;