import VideoPlayer from '../VideoPlayer'
import './VideoExamples.css'

// Exemplos de uso do VideoPlayer customizado
export function VideoExamples() {
  return (
    <div className="video-examples">
      <h2>Exemplos do VideoPlayer Customizado</h2>

      {/* Exemplo 1: Vídeo vertical para produtos */}
      <section className="example-section">
        <h3>1. Vídeo Vertical de Produtos</h3>
        <p>Ideal para mostrar produtos em formato vertical (9:16)</p>

        <VideoPlayer
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://via.placeholder.com/400x600/CB3D98/FFFFFF?text=Produtos"
          className="vertical"
          width={300}
          height={533}
          muted={true}
          autoPlay={false}
        />
      </section>

      {/* Exemplo 2: Vídeo promocional horizontal */}
      <section className="example-section">
        <h3>2. Vídeo Promocional</h3>
        <p>Formato tradicional para conteúdo promocional</p>

        <VideoPlayer
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          poster="https://via.placeholder.com/800x450/267AAB/FFFFFF?text=Promo%C3%A7%C3%A3o"
          width="100%"
          height={400}
          muted={true}
          autoPlay={false}
          loop={true}
        />
      </section>

      {/* Exemplo 3: Vídeo institucional */}
      <section className="example-section">
        <h3>3. Vídeo Institucional</h3>
        <p>Para apresentar a empresa e seus valores</p>

        <VideoPlayer
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          poster="https://via.placeholder.com/600x400/4C364B/FFFFFF?text=Nossa+Empresa"
          width={600}
          height={400}
          muted={false}
          autoPlay={false}
        />
      </section>

      {/* Exemplo 4: Múltiplos vídeos em grid */}
      <section className="example-section">
        <h3>4. Grid de Vídeos</h3>
        <p>Múltiplos vídeos organizados em grade</p>

        <div className="video-grid">
          {[1, 2, 3, 4].map((index) => (
            <VideoPlayer
              key={index}
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              poster={`https://via.placeholder.com/300x400/CB3D98/FFFFFF?text=Video+${index}`}
              className="vertical"
              width="100%"
              height="auto"
              muted={true}
              autoPlay={false}
            />
          ))}
        </div>
      </section>

      {/* Exemplo 5: Vídeo responsivo */}
      <section className="example-section">
        <h3>5. Vídeo Totalmente Responsivo</h3>
        <p>Se adapta a qualquer tamanho de tela</p>

        <div className="responsive-container">
          <VideoPlayer
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
            poster="https://via.placeholder.com/1200x675/806B79/FFFFFF?text=Responsivo"
            width="100%"
            height="auto"
            muted={true}
            autoPlay={false}
            loop={true}
          />
        </div>
      </section>

      {/* Código de exemplo */}
      <section className="code-example">
        <h3>Código de Exemplo</h3>
        <pre><code>{`
// Importar o componente
import VideoPlayer from './components/VideoPlayer'

// Uso básico
<VideoPlayer
  src="/path/to/video.mp4"
  poster="/path/to/poster.jpg"
  width="100%"
  height="auto"
  muted={true}
  autoPlay={false}
/>

// Para vídeos verticais
<VideoPlayer
  src="/vertical-video.mp4"
  poster="/poster-vertical.jpg"
  className="vertical"
  width={300}
  height={533}
  muted={true}
  autoPlay={false}
  loop={true}
/>
        `}</code></pre>
      </section>
    </div>
  )
}