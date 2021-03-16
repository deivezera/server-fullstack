import { EntityManager } from "@mikro-orm/core";
import { Connection } from "@mikro-orm/core/connections/Connection";
import { IDatabaseDriver } from "@mikro-orm/core/drivers";

export interface MyContext { 
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>> 
}