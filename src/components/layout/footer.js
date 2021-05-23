import moment from "moment";

export const Footer = () => {
  return (
    <footer class="footer">
      <small>Pablo Ospino Sánchez - {moment().format('YYYY')}</small>
    </footer >
  )
}