import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput, Button, Alert, ScrollView, SafeAreaView  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import * as ImagePicker from 'expo-image-picker';


const PaginaInicial = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <View style={styles.box}>
          <Image
            source={{ uri: 'https://fotos.amomeupet.org/uploads/fotos/1679426928_641a0570d5585_hd.jpg' }}
            style={styles.image}
          />
          <Text style={styles.titulo}>Luna</Text>
          <Text style={styles.titulo}>17/07/2016</Text>
          <Text style={styles.texto}>
            Hoje minha filha de 4 patas foi adotada!
          </Text>
          <StatusBar style="auto" />
      </View>
      <View style={styles.box}>
          <Image
            source={{ uri: 'https://petgusto.com/wp-content/uploads/2019/09/cachorro-vira-lata-3.jpg' }}
            style={styles.image}
          />
          <Text style={styles.titulo}>Luna</Text>
          <Text style={styles.titulo}>29/09/2017</Text>
          <Text style={styles.texto}>
           Brincando com a mamãe!
          </Text>
          <StatusBar style="auto" />
      </View>
      <View style={styles.box}>
          <Image
            source={{ uri: 'https://blog-static.petlove.com.br/wp-content/uploads/2022/11/21114320/Cachorro-praia-protetor-solar-Petlove.jpg' }}
            style={styles.image}
          />
          <Text style={styles.titulo}>Luna</Text>
          <Text style={styles.titulo}>17/07/2017</Text>
          <Text style={styles.texto}>
            Na praia comemorando meu aniversário!
          </Text>
          <StatusBar style="auto" />
      </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
      <View style={styles.box}>
        <Text style={styles.titulo}>Perfil</Text>
        <Text style={styles.texto}>
          Luna{'\n'}• Srd{'\n'}• 2 Anos{'\n'}•Adotada em 17/07/2016
        </Text>
      </View>
    </View>
  );
};

const PaginaSaude = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão de localização não concedida', 'Por favor, conceda permissão de localização para obter a localização.');
        return;
      }

      let locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);
    })();
  }, []);

  const handleSearch = async () => {
    if (movieTitle.trim() === '') {
      Alert.alert('Aviso', 'Por favor, insira um título de filme válido.');
      return;
    }
    try {
      const apiKey = '1993e977'; // Substitua pelo seu próprio API Key
      const apiUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovieData(data);
      } else {
        Alert.alert('Erro', 'Filme não encontrado. Verifique o título e tente novamente.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Houve um problema na busca do filme. Tente novamente mais tarde.');
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <View style={styles.boxsaude}>
      <Text style={styles.titulo}>
        Busca um filme para assistir com seu AuMigo
      </Text>
      <TextInput
        style={{ borderWidth: 1, margin: 10, padding: 8 }}
        placeholder="Digite o nome do filme"
        value={movieTitle}
        onChangeText={(text) => setMovieTitle(text)}
      />
      <Button title="Buscar Filme" onPress={handleSearch} />

      {location && (
        <View>
          <Text style={styles.texto}>Veja abaixo no mapa a sua localização e a de Clínicas e Hospitais veterinários</Text>
          <MapView
            style={{ width: '100%', height: 400 , width: 300, borderRadius:35,}}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Sua Localização"
            />
            <Marker
    coordinate={{
      latitude: -8.129662399999997,
      longitude: -34.9028114,
    }}
    title="UNIMEVE CLÍNICA VETERINÁRIA LTDA"
  />
  <Marker
    coordinate={{
      latitude: -8.120030999999999,
      longitude: -34.8984131,
    }}
    title="Hospital Veterinário Harmonia - HVH - Unidade Boa Viagem"
  />
  <Marker
    coordinate={{
      latitude: -8.0317273,
      longitude: -34.9156454,
    }}
    title="Hospital Veterinário Harmonia - HVH - Unidade Casa Forte"
  />
  <Marker
    coordinate={{
      latitude: -8.031541899999999,
      longitude: -34.9443163,
    }}
    title="Hospital Veterinário Sobre Patas"
  />
  <Marker
    coordinate={{
      latitude: -8.054412,
      longitude: -34.9020251,
    }}
    title="VetMais Hospital Veterinário 24h"
  />
  <Marker
  coordinate={{
    latitude: -8.074681499999999,
    longitude: -34.9302948,
  }}
  title="Clínica Veterinária Amor de Bicho"
/>

<Marker
  coordinate={{
    latitude: -8.0497956,
    longitude: -34.90187570000001,
  }}
  title="Pet Palace Luxo"
/>

<Marker
  coordinate={{
    latitude: -8.0437475,
    longitude: -34.9079687,
  }}
  title="Clínica Veterinária Arionaldo de Sá"
/>

<Marker
  coordinate={{
    latitude: -8.0523679,
    longitude: -34.9082265,
  }}
  title="Clínica Veterinária Catchorrinhos"
/>

<Marker
  coordinate={{
    latitude: -8.132384400000001,
    longitude: -34.9072189,
  }}
  title="Clínica Veterinária Dog Mania"
/>

<Marker
  coordinate={{
    latitude: -8.043716,
    longitude: -34.8998448,
  }}
  title="Veterinário 24h | Hospital Veterinário | Animais Silvestres | OhPet! Centro Veterinário"
/>

<Marker
  coordinate={{
    latitude: -7.999380899999999,
    longitude: -34.8428367,
  }}
  title="Hospital Veterinário 4 Patas - 24 horas"
/>

<Marker
  coordinate={{
    latitude: -8.0537176,
    longitude: -34.9066734,
  }}
  title="Plantão Veterinário - Hospital 24h"
/>

<Marker
  coordinate={{
    latitude: -7.991508099999998,
    longitude: -34.8393857,
  }}
  title="VetPop- Hospital Veterinário Particular"
/>

<Marker
  coordinate={{
    latitude: -8.047582900000002,
    longitude: -34.8987198,
  }}
  title="Mapi Pet clínica Veterinária"
/>

<Marker
  coordinate={{
    latitude: -8.0476774,
    longitude: -34.9113918,
  }}
  title="Consultório Veterinário Adriana Lubambo"
/>

<Marker
  coordinate={{
    latitude: -8.046726800000002,
    longitude: -34.9015227,
  }}
  title="Veterinarii Recife"
/>

<Marker
  coordinate={{
    latitude: -8.0253044,
    longitude: -34.9069933,
  }}
  title="Clinicão Center"
/>

<Marker
  coordinate={{
    latitude: -8.041611,
    longitude: -34.93969390000001,
  }}
  title="Convet - Clínica Veterinária"
/>

<Marker
  coordinate={{
    latitude: -8.0317648,
    longitude: -34.9306271,
  }}
  title="Clínica Veterinária Patrícia Barroca"
/>

<Marker
  coordinate={{
    latitude: -8.0410669,
    longitude: -34.908317,
  }}
  title="Clínica Pet Caroline Keffer"
/>

<Marker
  coordinate={{
    latitude: -8.041699,
    longitude: -34.936292,
  }}
  title="Bicho Mania"
/>

<Marker
  coordinate={{
    latitude: -8.031879499999999,
    longitude: -34.9241441,
  }}
  title="Animalis - Cirurgia e Clínica Veterinária - Recife"
/>

<Marker
  coordinate={{
    latitude: -8.0544975,
    longitude: -34.92064959999999,
  }}
  title="ACLIVE - CLÍNICA VETERINÁRIA"
/>

<Marker
  coordinate={{
    latitude: -8.0474488,
    longitude: -34.9281536,
  }}
  title="Veterinário Vita 24h - Caxangá 1"
/>

<Marker
  coordinate={{
    latitude: -8.060395699999999,
    longitude: -34.9277137,
  }}
  title="CLÍNICA VETERINÁRIA ALFA"
/>

<Marker
  coordinate={{
    latitude: -8.0269286,
    longitude: -34.9133003,
  }}
  title="PETBEM CLÍNICA VETERINÁRIA"
/>

<Marker
  coordinate={{
    latitude: -8.0350849,
    longitude: -34.9204726,
  }}
  title="Pet Villa Casa Forte"
/>

<Marker
  coordinate={{
    latitude: -8.115803899999998,
    longitude: -34.8992675,
  }}
  title="Clínica Cirúrgica Veterinária Thiago Zacarias"
/>



          </MapView>
        </View>
      )}

      {movieData && (
        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{movieData.Title}</Text>
          <Text>Ano: {movieData.Year}</Text>
          <Text>Gênero: {movieData.Genre}</Text>
          <Text>Diretor: {movieData.Director}</Text>
          <Text>Prêmios: {movieData.Awards}</Text>
        </View>
      )}
   </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const handleOpenCamera = async () => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert(
      'Permissão necessária',
      'Para usar a câmera, você precisa conceder permissão.',
      [{ text: 'OK' }]
    );
    return;
  }

  try {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // Aqui você pode lidar com a imagem capturada
      console.log(result.uri);
    }
  } catch (error) {
    console.log('Erro ao abrir a câmera:', error);
  }
};
const NavBar = ({ onPageChange, handleOpenCamera }) => {
  
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navButton} onPress={() => onPageChange('Página Inicial')}>
        <Icon name="book" size={24} color="#fff" />
        <Text style={styles.navText}>Diário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={handleOpenCamera}>
        <Icon name="plus-circle" size={24} color="#fff" />
        <Text style={styles.navText}>Novo Registro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => onPageChange('Saúde')}>
        <Icon name="heartbeat" size={24} color="#fff" />
        <Text style={styles.navText}>Saúde</Text>
      </TouchableOpacity>
    </View>
  );
};


const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handlePageChange = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Saúde':
        return <PaginaSaude />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-lavender-simple-rose-texture-image_28475.jpg' }} style={styles.imageBackground}>
        <View style={styles.header}>
          <Text style={styles.titulocurriculo}>Web Pet</Text>
          <View>
            <Image
              source={{ uri: 'https://www.patasdacasa.com.br/sites/default/files/noticias/2021/06/cachorro-vira-lata-filhote-quais-os-cuidados-mais-importantes-durante-essa-fase.jpg' }}
              style={styles.fotoperfil}
            />
          </View>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
            <Text>☰</Text>
          </TouchableOpacity>
        </View>

        {menuAberto && (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} onPress={() => handlePageChange('Página Inicial')}>
              <Text style={styles.menuItemText}>Página Inicial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handlePageChange('Página 1')}>
              <Text style={styles.menuItemText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handlePageChange('Página 2')}>
              <Text style={styles.menuItemText}>Configuração</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handlePageChange('Página 3')}>
              <Text style={styles.menuItemText}>Sair</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.content}>{renderizarPagina()}</View>

        <NavBar onPageChange={handlePageChange} />
      </ImageBackground>
      <NavBar onPageChange={handlePageChange} handleOpenCamera={handleOpenCamera} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
  },
  menuIcon: {
    padding: 10,
    marginTop: 30,
  },
  menu: {
    backgroundColor: 'rgba(248, 248, 255, 0.55)',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 17,
    color: '#4b0082',
  },
  fotoperfil: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    marginBottom: 10,
    alignSelf: 'center', // Centraliza a imagem na tela horizontalmente
  },
  box: {
    marginTop: 10, // Adiciona espaço entre a navbar e a box das fotos
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(248, 248, 255, 0.55)',
    width: 355,
    height: 355,
    borderRadius: 37.5,
  },
  boxsaude: {
    marginTop: 10, // Adiciona espaço entre a navbar e a box das fotos
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(248, 248, 255, 0.55)',
    width: 355,
    height: 'auto', // Altura ajustada dinamicamente com base no conteúdo
    borderRadius: 37.5,
    paddingBottom: 10,
    paddingTop: 10,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4b0082', // Cor de fundo da nav bar
    height: 60, // Altura da nav bar
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    color: '#fff', // Cor do texto
    fontSize: 12, // Tamanho do texto
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 35,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4F4F4F',
  },
  texto: {
    fontSize: 16,
    color: '#4F4F4F',
  },
  titulocurriculo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b0082',
  },
});

export default App;
