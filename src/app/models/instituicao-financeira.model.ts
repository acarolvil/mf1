
import { FilterMatchMode } from "primeng/api";
import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";




export class InstituicaoFinanceiraList {
    id: number = 0;
    nome: string = '';
    cnpj: number = 0
    logradouro: string = '';
    numero: string = '';
    cep: string = '';
    cidade_Id: number = 0;

}

export class InstituicaoFinanceiraRequest {
    id: number = 0;
    nome: string = '';
    cnpj: number = undefined as unknown as number;
    cidade_Id: number = undefined as unknown as number;
    logradouro: string = '';
    numero: string = '';
    cep: string = '';


}

export class InstituicaoFinanceiraResponse {
    nome: string = '';
    cpf: number = '' as unknown as number;
    sucesso: boolean = true;
    detalhes: string = '';
}

export var instituicaoFinanceiraColumns: Column[] = [

    {

        field: 'nomeInstituicao',
        header: 'Nome',
        maskType: MaskType.undefined,
        filterType: FilterType.text,
        filterDisplay: FilterDisplay.menu,
        filterShowAddButton: true,
        filterShowMatchMode: true,
        showOperator: false,
        filterMatchMode: FilterMatchMode.CONTAINS,

    },
    {
        field: 'cnpj',
        header: 'CNPJ',
        maskType: MaskType.cnpj,
        mask: '0000',
        filterType: FilterType.text,
        filterDisplay: FilterDisplay.menu,
        filterShowAddButton: false,
        filterShowMatchMode: false,
        showOperator: false,
        filterMatchMode: FilterMatchMode.EQUALS,
    },
    {
        field: 'nomeCidade',
        header: 'Cidade',
        maskType: MaskType.undefined,
        filterType: FilterType.text,
        filterDisplay: FilterDisplay.menu,
        filterShowAddButton: false,
        filterShowMatchMode: false,
        showOperator: false,
        filterMatchMode: FilterMatchMode.EQUALS,
    },
    {
        field: 'uf',
        header: 'UF',
        maskType: MaskType.undefined,
        filterType: FilterType.text,
        filterDisplay: FilterDisplay.menu,
        filterShowAddButton: false,
        filterShowMatchMode: false,
        showOperator: false,
        filterMatchMode: FilterMatchMode.EQUALS,
    },
    
];
