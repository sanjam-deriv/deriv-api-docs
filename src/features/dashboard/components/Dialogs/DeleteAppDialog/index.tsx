import React, { useMemo } from 'react';
import { TModalActionButton } from '@deriv/ui/dist/types/src/components/core/modal/types';
import { Modal } from '@deriv/ui';
import { useDeleteApp } from '../../../hooks/useDeleteApp';

type TDeleteAppDialogProps = {
  appId: number;
  onClose: () => void;
};

const DeleteAppDialog = ({ appId, onClose }: TDeleteAppDialogProps) => {
  const { deleteApp } = useDeleteApp();

  const actionButtons: TModalActionButton[] = useMemo(
    () => [
      {
        id: 0,
        text: 'Yes, delete',
        color: 'primary',
        onClick: () => {
          deleteApp(appId);
          onClose();
        },
      },
      {
        id: 1,
        text: 'No, keep it',
        color: 'secondary',
        onClick: () => {
          onClose();
        },
      },
    ],
    [appId, deleteApp, onClose],
  );

  return (
    <Modal open={true}>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.DialogContent
          title='Delete app'
          content='Are you sure you want to delete this app?'
          action_buttons={actionButtons}
          has_close_button
        />
      </Modal.Portal>
    </Modal>
  );
};

export default DeleteAppDialog;