import {DataTypes, Model} from "sequelize";
import {sequelize} from "../config/db.config";

export default class MeasurementInfo extends Model {
    declare id: number
    declare dateTime: Date
    declare rgbCamera: boolean
    declare multispectralCamera: boolean
    declare numberOfSensors: number
    declare lengthOfAE: number
    declare scheduled: boolean
}

MeasurementInfo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    rgbCamera: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    multispectralCamera: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    numberOfSensors: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    lengthOfAE: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    scheduled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize
})