import React from 'react';
import { ModalContainer, ModalContent, ModalHeader } from './styles';
import Cancel from '../../static/img/cancel.svg';
import Icon from '../Section/Icon';

export type ModalProps = {
  header?: string;
  children: React.ReactNode;
  closeButton?: () => void;
};

export default function Modal({ header, closeButton, children }: ModalProps) {
  return (
    <ModalContainer>
      <ModalContent>
        {header && (
          <ModalHeader>
            {header}{' '}
            {closeButton && (
              <button type="button" onClick={closeButton}>
                <Icon svg={Cancel} alt="Fechar" />
              </button>
            )}
          </ModalHeader>
        )}
        {children}
      </ModalContent>
    </ModalContainer>
  );
}
