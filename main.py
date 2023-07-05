from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/texture-pack')
def texturepack():
    return render_template('texture-pack.html')

@app.route('/youtube')
def youtube():
    return render_template('youtube.html')

@app.route('/portales')
def portales():
    return render_template('portales.html')

@app.route('/slime-chunks')
def slimechunks():
    return render_template('slime-chunks.html')

if __name__ == '__main__':
  app.run(debug=True)
