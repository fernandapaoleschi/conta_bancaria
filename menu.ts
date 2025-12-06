import readlinesync = require("readline-sync");

export function main() {
    let opcao: number;
    while(true){
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Digite a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 9){
            console.log("\nBanco do Brazil com Z - O futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log("\nCriar conta\n\n");
                break;
            
            case 2:
                console.log("\nListar todas as contas\n\n");
                break;
            
            case 3:
                console.log("\nConsultar dados da conta - por número\n\n");
                break;
            
            case 4:
                console.log("\nAtualizar dados da conta\n\n");
                break;
            
            case 5:
                console.log("\nApagar uma Conta\n\n");
                break;
            
            case 6:
                console.log("\nSaque\n\n");
                break;
            
            case 7:
                console.log("\nDepósito\n\n");
                break;
            
            case 8:
                console.log("\nTransferência entre contas\n\n");
                break;
            
            default:
                console.log("\nOpção inválida!\n\n");
                break;

        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");

}