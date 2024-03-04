import { useCallback } from "react";
import DocumentPicker, { types } from 'react-native-document-picker';

import { Button } from "react-native-paper";

interface props {
    children: string,
    onResponse: Function,
    mode: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal' | undefined
}

interface propsWithLabel extends props {
    label: string,
    icon?: never
}

interface propsWithIcon extends props {
    label?: never,
    icon: string,
}

interface propsWithBoth extends props {
    label:string,
    icon:string
}

type DocumentUploaderProps = propsWithLabel | propsWithIcon | propsWithBoth

export default function DocumentUploader({children, icon, label, mode, onResponse} :DocumentUploaderProps) {
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