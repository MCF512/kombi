import { useState } from "react"
import { Container, Page } from "../../components";
import imageCompression from "browser-image-compression";
import { request } from "../../utils";
import styles from './AdminPage.module.scss'

export const AdminPage = () => {

    const [fileData, setFileData] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tagRU, setTagRU] = useState("")
    const [tagEN, setTagEN] = useState("")
    const [weight, setWeight] = useState("")
    const [size, setSize] = useState("")
    const getFile = (e: any) => {
        if (e.target.files[0]) {
            setFileData(e.target.files[0]);
        } else {
            console.log('Нет файла')
        }
    };

    const uploadFile = async (e: any) => { 
        e.preventDefault(); 
        
    if (fileData) {
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
          }
        const compressedBlob = await imageCompression(fileData, options);
        const compressedFile = new File([compressedBlob], compressedBlob.name);
        const formData = new FormData()

        formData.append('file', compressedFile);

        const image = await fetch(`${import.meta.env.VITE_SERVER_URL}/upload`, {
            method: "POST",
            body: formData
        })

        return await image.json()
    }
      };

    const handleSubmit = async (e: any) => {
        try {
            const image = await uploadFile(e);
            const body = {
                title,
                description,
                tagRU,
                tagEN,
                image,
                weight,
                size
            }
            const req = await request(`/product/add`, "POST", body)
            alert('ok')
        } catch(e) {
            alert('error')
        }
            
    }

    return (
        <Page>
            <Container>
                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <input className={styles.input} type="text" onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    placeholder="Заголовок"/>
                    <textarea className={styles.textarea} onChange={(e) => {setDescription(e.target.value)}} placeholder="Описание"/>
                    <input className={styles.input} type="text" onChange={(e) => {setTagRU(e.target.value)}} placeholder="Тег ru"/>
                    <input className={styles.input} type="text" onChange={(e) => {setTagEN(e.target.value)}} placeholder="Тег en"/>
                    <input className={styles.input} type="text" onChange={(e) => {setWeight(e.target.value)}} placeholder="Вес"/>
                    <input className={styles.input} type="text" onChange={(e) => {setSize(e.target.value)}} placeholder="Размер"/>
                    <input className={styles.input} type="file" name="file" onChange={(e) => getFile(e)} required/>
                    <input className={styles.input} type="submit" name="upload" value="Upload" />
                </form>
            </Container>
        </Page>
    )
}