import "./InfoPage.css";

function TallesPage() {
  return (
    <main className="info-page">
      <h1>Guía de Talles</h1>
      <p className="subtitle">Encontrá tu talle ideal con nuestras medidas.</p>

      <h2>Remeras y Buzos</h2>
      <p>Medidas en centímetros. La prenda se mide apoyada en plano.</p>

      <table className="talles-table">
        <thead>
          <tr>
            <th>Talle</th>
            <th>Ancho (cm)</th>
            <th>Largo (cm)</th>
            <th>Manga (cm)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>S</td><td>52</td><td>70</td><td>20</td></tr>
          <tr><td>M</td><td>55</td><td>72</td><td>21</td></tr>
          <tr><td>L</td><td>58</td><td>74</td><td>22</td></tr>
          <tr><td>XL</td><td>61</td><td>76</td><td>23</td></tr>
          <tr><td>XXL</td><td>64</td><td>78</td><td>24</td></tr>
        </tbody>
      </table>

      <h2>Pantalones y Joggers</h2>
      <table className="talles-table">
        <thead>
          <tr>
            <th>Talle</th>
            <th>Cintura (cm)</th>
            <th>Cadera (cm)</th>
            <th>Largo (cm)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>28 / S</td><td>72</td><td>92</td><td>100</td></tr>
          <tr><td>30 / M</td><td>76</td><td>96</td><td>102</td></tr>
          <tr><td>32 / L</td><td>80</td><td>100</td><td>104</td></tr>
          <tr><td>34 / XL</td><td>84</td><td>104</td><td>106</td></tr>
          <tr><td>36 / XXL</td><td>88</td><td>108</td><td>108</td></tr>
        </tbody>
      </table>

      <h2>Zapatillas</h2>
      <table className="talles-table">
        <thead>
          <tr>
            <th>AR</th>
            <th>US</th>
            <th>EUR</th>
            <th>CM</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>38</td><td>6</td><td>38</td><td>24</td></tr>
          <tr><td>39</td><td>7</td><td>39</td><td>24.5</td></tr>
          <tr><td>40</td><td>8</td><td>40</td><td>25.5</td></tr>
          <tr><td>41</td><td>9</td><td>41</td><td>26</td></tr>
          <tr><td>42</td><td>10</td><td>42</td><td>27</td></tr>
          <tr><td>43</td><td>11</td><td>43</td><td>27.5</td></tr>
          <tr><td>44</td><td>12</td><td>44</td><td>28.5</td></tr>
        </tbody>
      </table>

      <h2>¿Cómo medirte?</h2>
      <div className="steps">
        <div className="step">
          <span className="step-number">1</span>
          <div className="step-content">
            <h4>Usá una cinta métrica</h4>
            <p>Medí tu cuerpo directamente, sin apretar</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">2</span>
          <div className="step-content">
            <h4>Compará con la tabla</h4>
            <p>Si estás entre dos talles, elegí el más grande</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">3</span>
          <div className="step-content">
            <h4>Tené en cuenta el fit</h4>
            <p>Nuestras prendas son oversize. Si preferís más ajustado, bajá un talle</p>
          </div>
        </div>
      </div>

      <div className="highlight-box">
        <p>💬 ¿Dudas con el talle? Escribinos por WhatsApp y te asesoramos.</p>
      </div>
    </main>
  );
}

export default TallesPage;
