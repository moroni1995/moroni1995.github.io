<?php
    $form = "";
    if (isset($_POST['submit'])) {
        $order = $_POST['order'];
        $application_name = $_POST['application_name'];
        $access_type = $_POST['access_type'];
        $network_type = $_POST['network_type'];
        $wired_conn = $_POST['wired_conn'];
        $downtest = $_POST['downtest'];
        $uptest = $_POST['uptest'];
        $source = $_POST['source'];
        $antivirus = $_POST['antivirus'];
        $exe_files = $_POST['exe_files'];
        $permission = $_POST['permission'];
        $date_time = $_POST['date_time'];
        $so = $_POST['so'];
        $system_info = $_POST['system_info'];
        $description = $_POST['description'];

        $myfile = fopen("script.txt", "w");
        $txt = "
        
        SCRIPT SAJ - Solicitação $order <br>
        <br>
        1. Reinstalação do zero do SAJ WebConnection ou SAJ (se for via VPN ou VDI). Sempre executar o SAJ como Administrador;<br>
        r:  - Desinstalação SAJ através do arquivo unins000 em 'C:\Arquivos TJSP'. <br>
            - Download da versão mais recente no site do 'tjsp.jus.br/webconnection'. <br>
            - Instalação do $application_name ($access_type) e atualização como administrador. <br>
        <br>
        2. Analisar junto ao usuário a qualidade da rede utilizada e Qual o tipo de conexão utiliza Wifi, 3G/4G, cabeada; <br>
        r: $network_type, Disponibilidade de cabo de rede? $wired_conn. $downtest Mb download e $uptest Mb upload. Teste efetuado em $source. <br>
        <br>
        3. Identificar se o anti-vírus não está bloqueando o SAJ;<br>
        r: $exe_files foram adicionados ao Firewall. Pasta 'C:\Arquivos TJSP' adicionada às exceções de $antivirus.<br>
        <br>
        4. Identificar se o usuário possui acesso total a pasta raiz C: (apenas verificar, não alterar nada e solicitar que o usuário execute o ajuste com a ajuda da Infra do TJ); <br>
        r: Usuário 'Todos' adicionado à Segurança da pasta C:\Arquivos TJSP e concedido controle total. <br>
        <br>
        5. Coletar o máximo de subsídios, vídeo, quando se tratar de erro para acessar o SAJ coletar o ini; <br>
        r: $description. <br>
        <br>
        6. Encaminhar atividade para a equipe avançada no intuito de que coletem log do servidor; <br>
        r:  Print e log do erro em anexo. <br>
        <br>
        7. Verificação do Idioma configurado no Sistema Operacional (Configurar como PT-BR); <br>
        r: $so, Idioma, data e hora estão corretos. $system_info";

        fwrite($myfile, $txt);
        fclose($myfile);

        header("location:form.php");

    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <title>Document</title>
</head>
<body>
    <form action="saj.php" method="post">
        <label for="order">Número da solicitação: 
            <input type="text" name="order" id="">
        </label><br>
        <label for="application_name" id="">Módulo SAJ:
            <select name="application_name" id="" required>
                <option value="" selected disabled>Selecione o módulo do SAJ</option>
                <option value="SAJ/PG5 - Primeiro Grau">SAJ/PG5 - Primeiro Grau</option>
                <option value="SAJ/SG5 - Segundo Grau">SAJ/SG5 - Segundo Grau</option>
                <option value="SAJ/SG5 - Colégio Recursal">SAJ/SG5 - Colégio Recursal</option>
                <option value="SAJ/EST - Estatísticas">SAJ/EST - Estatísticas</option>
                <option value="SAJ/SGC - Certidões">SAJ/SGC - Certidões</option>
            </select>
        </label><br>
        <label for="application_name" id="">Tipo de acesso:
            <select name="access_type" id="" required>
                <option value="" selected disabled>Selecione o tipo de acesso</option>
                <option value="Webconnection">Webconnection</option>
                <option value="VDI">VDI</option>
                <option value="VPN">VPN</option>
            </select>
        </label><br>
        <label for="network_type">Tipo de conexão: 
        <select name="network_type" id="" required>
            <option value="Cabo de rede">Cabo de rede</option>
            <option value="Wi-Fi">Wi-Fi</option>
        </select>
        </label><br>
        <label for="radio" id="">Disponibilidade de cabo de rede:
            <label for="wired_conn"><input type="radio" name="wired_conn" value="Sim" id="" required>Sim</label>
            <label for="wired_conn"><input type="radio" name="wired_conn" value="Não" id="">Não</label>
        </label><br>
        <label for="downtest">Taxa de download: <input type="text" name="downtest" id="" required></label> <br>
        <label for="uptest">Taxa de upload: <input type="text" name="uptest" id="" required></label> <br>
        <label for="source">Teste efetuado em: <input type="text" name="source" placeholder="Ex: speedtest.net" id="" required></label> <br>
        <label for="antivirus">Informe o nome do antivírus: <input type="text" name="antivirus" placeholder="Ex: Windows Security" id="" required></label><br>
        <label for="exe_files">Informe os executáveis adicionados às exceções do Firewall, Antivírus e Módulo RansomWare (se houver): 
            <input type="text" name="exe_files" placeholder="Ex: sajpg5.exe, sajpg5app.exe, spexec.exe" id="" style="width: 300px;" required>
        </label><br>
        <label for="permission"> Foi dado permissões ao usuário <b>Todos</b> na pasta <b>C:\Arquivos TJSP</b>?
            <input type="radio" name="permission" id="" required> Sim
            <input type="radio" name="permission" id=""> Não
        </label><br>
        <label for="date_time"> Idioma, data e hora do sistema estão corretas?
            <input type="radio" name="date_time" id="" required> Sim
            <input type="radio" name="date_time" id=""> Não
        </label><br>
        <label for="so"> Sistema Operacional: <input type="text" name="so" placeholder="Ex: Windows 10" id="" required></label> <br>
        <label for="system_info"> Configuração do computador: 
            <input type="text" name="system_info" placeholder="Ex: Intel i5-5200, 8,00 GB RAM" id="" style="width: 200px" required>
        </label> <br>
        <label for="description">Descreva o problema ocorrido (Coletar prints para anexar ao chamado): <br>
            <textarea name="description" id="" cols="50" rows="8" style="resize: none;" required></textarea>
        </label><br>

        <button type="submit" name="submit">Submit</button>
    </form><br>
    <div>
        <?php print $form; ?>
    </div>
</body>
</html>