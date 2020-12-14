//#region Importacoes
import 
    React,
    {
        useEffect,
        useState
    } from "react";
import {useHistory} from "react-router-dom";
import {
    ButtonVoltar,
    TitleService,
    DescricaoProblema,
    ContainerCabecalho,
    ContainerDataService,
    ContainerIconeRelogio,
    ContainerTextData,
    StatusService,
    ClientInformation,
    UserContainer,
    PhotoSide,
    InfoSide,
    UserType,
    UserName
} from "./style";

import ClockImage from "../../assets/clock.png"

import photoProfile from "../../assets/perfilPadrão.jpg";

import {searchServiceById, searchUser} from "../../services/api";

import {LoadingFire} from "../loading/loadingEffects";

//#endregion

const TableService = ({post}) => {
    const [userCliente, setUserCliente] = useState({
        nome: "Cliente",
    });
    const [userPrestador, setUserPrestador] = useState({
        nome: "Prestador",
    })

    const GetClientService = () => {

        const getClientData = async () => {
            const responseClient = (await searchUser(post.ClienteId)).data;
            setUserCliente(responseClient);

            if (post.resolvido_por != null){
                const responsePrestador = (await searchUser(post.ClienteId)).data;
                setUserPrestador(responsePrestador);
            }
            else{
                setUserPrestador({nome: "ninguém"});
            }
        }

        useEffect(() => {
            getClientData();
        }, [post]);
        if (document.getElementById("userClient")){
            document.getElementById("userClient").innerHTML = userCliente.nome;
        }
        if (document.getElementById("userPrestador")){
            document.getElementById("userPrestador").innerHTML = userPrestador.nome;
        }
    }

    console.log(searchServiceById(2));

    console.log(post);
    const History = useHistory();
    const redirectHome = () => {
        return History.push("/home");
    }
    
    const formataData = () => {
        const data = new Date(post.data_hora_abertura).toLocaleString();
        if (document.getElementById('data') != null){
            document.getElementById('data').innerHTML = data;
        }
    }
    formataData();
    GetClientService(post.ClienteId);
    return (
        <container>
            <ContainerCabecalho>
                <ButtonVoltar onClick={redirectHome}>
                    Voltar
                </ButtonVoltar>
                <ContainerDataService>
                    <ContainerIconeRelogio>
                        <img src={ClockImage} alt="Relógio de um relógio" title="Relógio de um relógio"/>
                    </ContainerIconeRelogio>
                    <ContainerTextData id="data">
                        2020-10-05 00:00
                    </ContainerTextData>
                </ContainerDataService>
            </ContainerCabecalho>
            <TitleService id="tituloProblema">
                {post.problema}
            </TitleService>
            <DescricaoProblema>
                {post.descricao}
            </DescricaoProblema>
            <StatusService>
                Status: Em Aberto.
            </StatusService>
            <ClientInformation>
                <UserContainer>
                    <PhotoSide>
                        <img src={photoProfile} alt="Foto Cliente" title="Foto Cliente"/>
                    </PhotoSide>
                    <InfoSide>
                        <UserType>
                            Cliente
                        </UserType>
                        <UserName id="userClient"/>
                    </InfoSide>
                </UserContainer>
                <UserContainer>
                    <PhotoSide>
                        <img src={photoProfile} alt="Foto Cliente" title="Foto Cliente"/>
                    </PhotoSide>
                    <InfoSide>
                        <UserType>
                            Prestador
                        </UserType>
                        <UserName id="userPrestador"/>
                    </InfoSide>
                </UserContainer>
            </ClientInformation>
        </container>
    );
}

const Detalhes = (props) => {
    const [serviceData, setServiceData] = useState({
        id: 1,
        problema: "none",
        descricao: "Não há descrição",
        data_hora_abertura: "0000-00-00 00:00",
        data_hora_encerramento: null,
        em_aberto: 1,
        em_atendimento: 0,
        resolvido_por: null,
        CreatedAt: "0000-00-00 00:00",
        updatedAt: "0000-00-00 00:00",
        ClienteId: null
    });

    const [loadingStatus, setLoadingStatus] = useState(true);
   
    const getServiceData = async() => {
        try {
            const response = (await searchServiceById(props.serviceId)).data;
            setServiceData(response);
            setLoadingStatus(false);
        } catch (error) {
            if(error.response){
                window.alert(error.response.data.erro);
            }
        }
    }

    useEffect(() => {
        getServiceData();
    }, []);

    return (
        loadingStatus===true ? <LoadingFire/> : <TableService post={serviceData}/>
    );
}

export default Detalhes;