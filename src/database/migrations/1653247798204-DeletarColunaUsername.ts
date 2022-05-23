import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class DeletarColunaUsername1653247798204 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(
        //     `ALTER TABLE "users" DROP COLUMN username`
        // )
        await queryRunner.dropColumn("users", "username")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users", 
            new TableColumn({
                name: "username",
                type: "varchar"
            })
            )
    }

}
