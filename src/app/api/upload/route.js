import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniqid from 'uniqid';

export async function POST(req){
    const formData = await req.formData();
    const file = formData.get("file");
    const data = await file.arrayBuffer();
    const {name,type} = file
    const id = uniqid();
    const ext = name.split('.').slice(-1)[0];
    const newName = id +'.'+ ext;

    const s3Client =new S3Client({
        region:'ap-southeast-2',
        credentials:{
            accessKeyId:process.env.AWS_ACCESS,
            secretAccessKey:process.env.AWS_SECERT_ACCESS,
        },
    });
    const uploadCommand = new PutObjectCommand({
        Bucket: process.env.BUCKET,
        Body: data,
        ACL: 'public-read',
        ContentType: type,
        Key:newName,

    });

    await s3Client.send(uploadCommand);

    return Response.json({name,ext,newName,id});
}