FROM quay.io/islamickcyberchat/cyber-rajib
RUN git clone https://github.com/cyberrajib999/Best-wp-bot /root/CYBER-RAJIB
# RUN rm -rf /root/CYBER-RAJIB/.git
WORKDIR /root/CYBER-RAJIB
RUN npm install || yarn install
EXPOSE 8000
CMD ["npm","start" ]
