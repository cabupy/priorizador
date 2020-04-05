import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Select } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function CustomHeader(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  });
  return (
    <div className="header" style={{ maxHeight: '20vh' }}>
      <div className="header-title">Priorizador</div>
      <div className="header-info">
        <a
          href="https://medium.com/@d.riveros.garcia/una-propuesta-para-que-la-ayuda-covid-19-llegue-a-tantas-familias-paraguayas-como-sea-posible-8adfe1101806"
          target="_blank"
        >
          <InfoCircleOutlined />
        </a>
      </div>
      {isDesktopOrLaptop && (
        <div className="header-selector">
          <Select
            defaultValue="tekopora"
            onChange={props.onChange}
            style={{ width: 180 }}
          >
            <Option value="almuerzo">Almuerzo escolar</Option>
            <Option value="fundacion">Fundación Paraguaya</Option>
            <Option value="techo">Techo</Option>
            <Option value="tekopora">Tekoporā</Option>
          </Select>
        </div>
      )}
      <div className="header-right">
        <img
          className="header-logo"
          src={
            isDesktopOrLaptop
              ? 'reaccion-logo-white.svg'
              : 'isotipo-reaccion-white.svg'
          }
          alt="Reaccion"
          style={{ height: 43 }}
        />
        <img
          className="header-logo"
          src={
            isDesktopOrLaptop
              ? 'codium-logo-white.svg'
              : 'isotipo-codium-white.svg'
          }
          alt="Codium"
          style={{ height: 38 }}
        />
      </div>
    </div>
  );
}
