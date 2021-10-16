import React from 'react'
import './styles.css'

export default function Download(){
    
    return(
     <div id='DownloadConatainer'>
         {/* <a href='https://github.com/matheusdevelope/See-Later' 
         target="_blank">
             Download
         </a> */}
         <a
        href="https://github.com/matheusdevelope/See-Later/archive/refs/heads/main.zip"
        download
      >
          Download
      </a>
    </div>   
    )
    
}

