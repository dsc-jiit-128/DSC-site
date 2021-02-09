import React, { useEffect, useRef, useState } from 'react'
import mergeImages from 'merge-images'
import template from '../../images/bitbox/template.png'
import bitbox from '../../images/bitbox/bitbox.png'
import Logo from '../../images/bitbox/Logo.png'
import Resizer from 'react-image-file-resizer'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import TextField from '@material-ui/core/TextField'
import GetAppIcon from '@material-ui/icons/GetApp'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Photobooth = () => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down('xs'));

  const resizeFile = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 300, 300, 'JPEG', 100, 0,
      uri => {
        resolve(uri)
      },
      'base64'
    )
  })

  const [uploadedImage, setUploadedImage] = useState(null)
  const [mergedImages, setMergedImages] = useState(null)
  const [name, setName] = useState('')

  const canvasRef = useRef()

  useEffect(() => {
    if (uploadedImage && template) {
      resizeFile(uploadedImage).then(resizedImage => {
        mergeImages([{ src: resizedImage, x: 43, y: 43 }, template]).then(
          b64 => {
            setMergedImages(b64)
          }
        )
      })
    }

    if (canvasRef.current && mergedImages) {
      document.getElementById('catch_image').style.display = 'none'
      document.getElementById('catch_canva').style.display = 'flex'
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const imageObj = new Image()
      imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0)
        ctx.font = '37pt sans-serif'
        ctx.fillStyle = '#3885FC'
        ctx.fillText(name, 46, 470)
        // console.log('drawn', ctx)
      }
      imageObj.src = mergedImages
      // console.log(imageObj.src)
    }
  }, [name, uploadedImage, mergedImages])

  const imageHandler = (e) => {
    e.persist();
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUploadedImage(e.target.files[0])
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  var downloadCanvasAsImage = function () {
    const canvasImage = canvasRef.current.toDataURL('image/png')
    if(uploadedImage === null)
      window.alert("Upload a Picture First :)")
    else if(name === '')
      window.alert("Enter your amazing name!")
    else {
      // this can be used to download any image from webpage to local disk
      const xhr = new XMLHttpRequest()
      xhr.responseType = 'blob'
      xhr.onload = function () {
        const a = document.createElement('a')
        a.href = window.URL.createObjectURL(xhr.response)
        a.download = `${name}-bitbox.png`
        a.style.display = 'none'
        document.body.appendChild(a)
        a.click()
        a.remove()
      }
      xhr.open('GET', canvasImage) // This is to download the canvas Image
      xhr.send()
    }
  }

  return (
    <Container className="mt-9">
      <Grid container style={{  padding: '10px' }} spacing={3} alignItems="flex-end">
        {/* <Grid item sm={12} xs={12} /> */}
        <Grid item xs={12} style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
        <img alt='bitbox' src={Logo} style={{ width: '100px', height: '100px',display: 'inline-block', marginRight: "1rem", borderRadius: "50%" }} />
        <h1 style={{ textAlign: 'center', display:'inline-block' }}>BitBox | Photobooth</h1>
        </Grid>

        <div id="photobooth-buttons">
          <TextField type='text' placeholder="Enter Participant's Name" id='participant-name' value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="outlined" style={{width: isXS?'80%':''}}/>
          <input style={{ display: 'none' }} id="contained-button-file" type='file' name='uploaded-image' accept='image/*' onChange={imageHandler} />
          <label htmlFor="contained-button-file" style={{display:isXS?'block':'',marginLeft:isXS?'':'20px',width: isXS?'80%':''}}>
            <Button variant="contained" color="primary" component="span" style={{width:'100%'}}>
            Upload your <pre> </pre><PhotoCamera />
            </Button>
          </label>
        </div>


        <Grid item sm={3} />
        <Grid id='catch_canva' style={{ display: 'none',justifyContent:'center' }} item sm={6}>
          <canvas ref={canvasRef} style={{ width: '100%' }} width={940} height={788} />
        </Grid>
        <Grid id='catch_image' style={{ display:'flex', justifyContent:'center' }} item sm={6}>
          <img alt='participants pic' src={bitbox} style={{ width: '100%' }} />
        </Grid>
        {!isXS && <Grid item sm={3} />}
        {!isXS && <Grid item sm={3} />}
        
        <Grid item sm={6} xs={12}>
          <Button variant='contained' color='primary' style={{width:'100%'}} onClick={downloadCanvasAsImage}><GetAppIcon />Download</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Photobooth;
