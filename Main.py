import io
import eel
import base64
import pyqrcode

eel.init('web')

@eel.expose
def GenerateQr(data):
    global url
    url = pyqrcode.create(data)
    buffer = io.BytesIO()
    url.png(buffer, scale=18)
    return ("data:image/png;base64,"+ base64.b64encode(buffer.getvalue()).decode())

@eel.expose
def SaveQr():
    url.png('QR.png', scale=25)

eel.start('index.html', size=(1016, 559))
