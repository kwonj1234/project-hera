import { PropsWithChildren, useCallback } from "react";
import DocumentPicker, { types } from 'react-native-document-picker';

import { Button } from "react-native-paper";

interface props extends PropsWithChildren {
    onResponse: Function,
    mode: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal' | undefined,
    icon: string | undefined
}

export default function DocumentUploader({children, icon=undefined, mode, onResponse} :props) {
    const handleDocumentSelection = useCallback(async () => {
        try {
          const response = await DocumentPicker.pick({
            presentationStyle: 'fullScreen',
          });
          onResponse(response);
        } catch (err) {
          console.warn(err);
        }
      }, []);

    return (
        <Button
            mode={mode}
            icon={icon}
            onPress={() => handleDocumentSelection()}
        >
            {children}
        </Button>
    )
}