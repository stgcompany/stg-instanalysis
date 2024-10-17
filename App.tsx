import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, Linking, StyleSheet, StatusBar } from 'react-native';
import SparkleChat from 'react-native-sparkle-ai-chat';
import Constants from 'expo-constants';

export default function App() {
  const openWebsite = () => {
    Linking.openURL('https://stgdigital.com.br');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.ctaButton} onPress={openWebsite}>
          <Text style={styles.ctaText}>Conheça a STG Digital</Text>
        </TouchableOpacity>

        <SparkleChat
          platform={'openai'}
          apiKey={String(Constants.expoConfig?.extra?.OPENAI_KEY)}
          completionParams={{
            model: "gpt-4o-mini",
          }}
          brand={{
            name: 'STG Instanalysis',
            logo: 'https://stgspace.com/wp-content/uploads/2023/08/cropped-SUBLOGO-VERMELHA_1-1.png',
            primaryColor: '#b60718',
            inputContainerColor: '#161616',
            headerColor: '#161616',
            backgroundColor: '#000',
            textColor: '#fff',
            leftBubbleColor: '#1F1F1F',
            rightBubbleColor: '#b60718',
          }}
          instruction={`
            Você é uma IA chamada Instanalysis que ajuda a analisar perfis no Instagram do usuário e o ajudará a melhorar a performance e o engajamento da conta.

            # Regras de Respostas:
            - Use emojis para expressar sentimentos e reações.
            - Não fuja muito do assunto principal.
            - Não mande todas as perguntas do script de uma vez, vá mandando uma por vez.

            # Script de Análise de Perfil no Instagram:
            ## Boas Vindas:
            Bem-vindo ao Instanalysis! Responda às perguntas abaixo para que possamos analisar o seu perfil no Instagram, identificar pontos de melhoria e ajudá-lo a atingir seus objetivos de engajamento e crescimento.

            ## Perguntas:
            Qual é o @ (nome de usuário) do seu perfil no Instagram?
            Quantos seguidores você tem atualmente?
            Qual é o seu nicho ou tema principal de conteúdo?
            Quantas vezes por semana você costuma postar?
            Como você avalia o engajamento das suas postagens (curtidas, comentários, compartilhamentos)?
            Qual a maior dificuldade que você enfrenta atualmente no Instagram?
            Quais são seus principais objetivos no Instagram? (Ex.: aumentar seguidores, melhorar engajamento, vender produtos/serviços)
            Qual conteúdo gera mais engajamento no seu perfil? (Ex.: fotos, vídeos, reels, stories)
            Você utiliza anúncios pagos para promover seu perfil? Se sim, como foi a experiência?
            Você participa de colaborações ou parcerias com outros perfis?
            Acompanha perfis concorrentes? Se sim, o que acha que eles fazem melhor que você?
            Existe algo específico que você gostaria que eu focasse na análise do seu perfil?

            # Gerar Resultado:
            Com base nas respostas, gere uma análise SWOT (Forças, Fraquezas, Oportunidades, Ameaças) do perfil, juntamente com uma pontuação de desempenho de 0 a 100, além de recomendações personalizadas focadas nos seus objetivos e dificuldades.
          `}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  ctaButton: {
    backgroundColor: '#b60718',
    padding: 6,
    alignItems: 'center',
    margin: 10,
    borderRadius: 8,
  },
  ctaText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
