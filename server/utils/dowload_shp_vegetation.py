import wget
from io import BytesIO
import zipfile
import os
url='https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/geografia/tematicas/uso_suelo/1_250_000/serie_VII/889463842781_s.zip'
print("Descargando archivos de vegetacion")
wget.download(url)

# extracting the zip file contents
zipfile= zipfile.ZipFile("889463842781_s.zip")
zipfile.extractall('./data_veg')
os.remove("889463842781_s.zip")