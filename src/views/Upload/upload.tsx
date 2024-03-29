import { useState } from "react"

import { UploadProps } from "@/src/router"

import { View } from "react-native"
import { DocumentUploader } from "@/src/components"

export default function UploadScreen({navigation} :UploadProps) {
	const [document, setDocument] = useState(undefined)

	return (
		<View>
			<DocumentUploader
				mode="text"
				onResponse={setDocument}
			>
				Press Me
			</DocumentUploader>
		</View>
	)
}