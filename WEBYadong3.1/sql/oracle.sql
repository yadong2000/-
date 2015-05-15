
--string类型ID
create table HM_MODEL_DATASET_MPPING
(
  ID           VARCHAR2(255) not null,
  MODEL_ID     VARCHAR2(255),
  DATASET_IDS  VARCHAR2(255),
  MAPPING_INFO VARCHAR2(255),
  MAPPING_TIME TIMESTAMP(6),
  REMARK       VARCHAR2(255),
  TYPE         VARCHAR2(255)
)


--主键类型ID（配合序列实现ID自增）
create table HM_MODEL_DATASET_MPPING_INT
(
  ID           NUMBER(10) primary key,
  MODEL_ID     VARCHAR2(255),
  DATASET_IDS  VARCHAR2(255),
  MAPPING_INFO VARCHAR2(255),
  MAPPING_TIME TIMESTAMP(6),
  REMARK       VARCHAR2(255),
  TYPE         VARCHAR2(255)
)

create sequence SEQ_HM_MODEL_INT
minvalue 1
maxvalue 99999999
start with 1
increment by 1
cache 20;