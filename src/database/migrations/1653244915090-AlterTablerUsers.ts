import { MigrationInterface, QueryRunner } from "typeorm"

export class AlterTablerUsers1653244915090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "users" ADD "updated_at" TIMESTAMP`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "users" DROP COLUMN "updated_at"`
        )
    }

}
